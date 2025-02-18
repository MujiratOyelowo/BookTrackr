import { filterAndDisplayBooks } from "./filterBooks.js";
import { loadBooks, initializeModals, showEditModal, showDeleteModal, addBook } from "./bookOperations.js";
import { initializeChatbot, askChatBot, handleLocalCommands } from "./chatbot.js";

initializeChatbot();

document.addEventListener("DOMContentLoaded", () => {
  initializeModals(); // Set up modal events

  const chatHistory = document.getElementById("chat-history");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const bookList = document.getElementById("bookList");
  const bookForm = document.getElementById("bookForm");
  const searchBar = document.getElementById("searchBar");
  const filterGenre = document.getElementById("filterGenre");
  const chatWidget = document.getElementById("chat-widget");
  const chatCircle = document.getElementById("chat-circle");
  const closeBtn = document.getElementById("chat-close-btn");


  function appendMessage(text, sender = "bot") {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    msgDiv.textContent = text;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  sendBtn.addEventListener("click", async () => {
    const userInput = chatInput.value.trim();
    if (!userInput) return;
    appendMessage(userInput, "user");
    chatInput.value = "";

    const handled = await handleLocalCommands(userInput, appendMessage);
    if (handled) return;
    const botReply = await askChatBot(userInput);
    appendMessage(botReply, "bot");
  });

  chatInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
  if (bookForm) {
    bookForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value.trim();
      const author = document.getElementById("author").value.trim();
      const genre = document.getElementById("genre").value;
      const rating = document.getElementById("rating").value;
      if (title && author && genre && rating) {
        await addBook(title, author, genre, rating);
        bookForm.reset();
      }
    });
  }
  // Event delegation for book list buttons (edit and delete)
  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      const bookId = e.target.getAttribute("data-id");
      showEditModal(bookId);
    } else if (e.target.classList.contains("delete-btn")) {
      const bookId = e.target.getAttribute("data-id");
      showDeleteModal(bookId);
    }
  });

  async function applyFilters() {
    const searchText = searchBar.value.toLowerCase();
    const selectedGenre = filterGenre.value;
    await filterAndDisplayBooks(searchText, selectedGenre, bookList);
  }

  if (searchBar) {
    searchBar.addEventListener("input", applyFilters);
  }
  if (filterGenre) {
    filterGenre.addEventListener("change", applyFilters);
  }
  
  chatCircle.addEventListener("click", () => {
      chatWidget.classList.toggle("chat-widget-open")
  });
  closeBtn.addEventListener("click", () => {
      chatWidget.classList.remove("chat-widget-open")
  })
  // Optionally, call applyFilters() on page load to display all books if filters are empty
  applyFilters();
  loadBooks();
});
