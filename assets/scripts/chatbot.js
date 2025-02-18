// chatbot.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";
// import { askOpenAI } from "./openaiAPI.js";
import { addBook, editBook, deleteBookByTitle, getLocalSuggestion } from "./bookOperations.js";

let apiKey;
let genAI;
let model;

export async function initializeChatbot() {
  const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

export async function askChatBot(userInput) {
  if (!model) {
    return "Chatbot is not ready yet. Please wait a moment and try again.";
  }
  try {
    const response = await model.generateContent(userInput);
    // If there's no candidates array or it's empty, return fallback.
    if (!response.candidates || response.candidates.length === 0) {
      return "I'm sorry, I don't understand. Can you please rephrase? Or contact the developer for help.";
    }
  } catch (error) {
    console.error("Error calling AI model:", error);
    return "Sorry, something went wrong with the AI service.";
  }
}

// Processes local commands (help, Q&A, troubleshooting, explain feature, add, edit, delete, suggest)
export async function handleLocalCommands(userInput, appendMessage) {
  const lowerInput = userInput.toLowerCase().trim();

  //Interactive Help / Tutorial ===
  if (lowerInput === "help" || lowerInput.includes("tutorial")) {
    const helpText = 
      "Welcome to BookLog! Here are some commands you can use:\n" +
      "• add book [Title] by [Author], [Genre], [Rating]\n" +
      "• edit book [Old Title], [New Title], [New Author], [New Genre], [New Rating]\n" +
      "• delete book [Title]\n" +
      "• suggest book (or recommend book)\n" +
      "You can also ask questions like 'How do I search for books?' or 'What does the add book button do?'\n" +
      "If you run into issues, simply type 'I have an error' for troubleshooting tips.";
    appendMessage(helpText, "bot");
    return true;
  }

  //Q&A About App Features ===
  if (lowerInput.includes("how do i search") || lowerInput.includes("how to search")) {
    appendMessage("To search for a book, type keywords into the search bar; the list filters automatically by title or author.", "bot");
    return true;
  }
  if (lowerInput.includes("how do i filter") || lowerInput.includes("how to filter")) {
    appendMessage("To filter your book list, select a genre from the dropdown menu. The list updates automatically.", "bot");
    return true;
  }

  //Troubleshooting & Error Guidance ===
  if (lowerInput.includes("not working") || lowerInput.includes("error") || lowerInput.includes("issue")) {
    appendMessage("If you're experiencing issues, please check your internet connection, and try refreshing the page. If the problem persists, please contact support.", "bot");
    return true;
  }

  //Explain a Feature
  if (lowerInput.includes("what does") && lowerInput.includes("button") && lowerInput.includes("do")) {
    if (lowerInput.includes("add book")) {
      appendMessage("The 'Add Book' button submits a form when you input a new book's details (Title, Author, Genre, Rating) to add it to your log.", "bot");
    } else if (lowerInput.includes("edit")) {
      appendMessage("The 'Edit' button opens a modal that lets you update the details of the selected book.", "bot");
    } else if (lowerInput.includes("delete")) {
      appendMessage("The 'Delete' button opens a confirmation modal to remove the selected book from your log.", "bot");
    } else {
      appendMessage("I can explain any feature. For example, try asking 'What does the add book button do?'", "bot");
    }
    return true;
  }

  // Command: Add Book
  if (lowerInput.startsWith("add book")) {
    const details = userInput.slice(8).trim();
    const parts = details.split(",");
    if (parts.length >= 2) {
      const titleAuthor = parts[0].split("by");
      if (titleAuthor.length >= 2) {
        const title = titleAuthor[0].trim();
        const author = titleAuthor[1].trim();
        const genre = parts[1].trim();
        const rating = parts[2] ? parts[2].trim() : "N/A";
        await addBook(title, author, genre, rating);
        appendMessage(`Added book "${title}" by ${author} (Genre: ${genre}, Rating: ${rating})`, "bot");
      } else {
        appendMessage("Please provide details as: add book Title by Author, Genre, Rating", "bot");
      }
    } else {
      appendMessage("Please provide complete details: add book Title by Author, Genre, Rating", "bot");
    }
    return true;
  }

  // Command: Edit Book (updating all fields)
  // Expected format: "edit book Old Title, New Title, New Author, New Genre, New Rating"
  if (lowerInput.startsWith("edit book")) {
    const details = userInput.slice(9).trim();
    const parts = details.split(",");
    if (parts.length === 5) {
      const oldTitle = parts[0].trim();
      const newTitle = parts[1].trim();
      const newAuthor = parts[2].trim();
      const newGenre = parts[3].trim();
      const newRating = parts[4].trim();
      
      editBook(oldTitle, newTitle, newAuthor, newGenre, newRating)
        .then(success => {
          if (success) {
            appendMessage(`Updated book "${oldTitle}" to: Title: "${newTitle}", Author: "${newAuthor}", Genre: "${newGenre}", Rating: "${newRating}"`, "bot");
          } else {
            appendMessage(`Book "${oldTitle}" not found.`, "bot");
          }
        });
    } else {
      appendMessage('Use: "edit book Old Title, New Title, New Author, New Genre, New Rating"', "bot");
    }
    return true;
  }

  // Command: Delete Book
  if (lowerInput.startsWith("delete book")) {
    const title = userInput.slice(11).trim();
    if (title) {
      const success = await deleteBookByTitle(title);
      if (success) {
        appendMessage(`Deleted book "${title}"`, "bot");
      } else {
        appendMessage(`Book "${title}" not found.`, "bot");
      }
    } else {
      appendMessage("Please specify a book to delete: delete book Title", "bot");
    }
    return true;
  }
}
