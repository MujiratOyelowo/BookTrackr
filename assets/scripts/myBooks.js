import { db } from "../scripts/firebase.js";
import { collection, getDocs, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.getElementById("bookList");

  // Modal elements
  const editModal = document.getElementById("editModal");
  const editForm = document.getElementById("editForm");
  const closeModalBtn = document.querySelector(".close-btn");

  // Variable to store the current book id being edited
  let currentBookId = null;

  // Load books function
  async function loadBooks() {
    bookList.innerHTML = "";
    const booksCollection = collection(db, "books");
    const bookSnapshot = await getDocs(booksCollection);
    const books = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    books.forEach(book => {
      // Create a list item with Edit/Delete buttons
      const li = document.createElement("li");
      li.innerHTML = `
        <span><strong>${book.title}</strong> by ${book.author} (${book.genre}) ⭐${book.rating}</span>
        <button class="edit-btn" data-id="${book.id}">Edit</button>
        <button class="delete-btn" data-id="${book.id}">Delete</button>
      `;
      bookList.appendChild(li);
    });
  }

  // Delete a book
  async function deleteBook(bookId) {
    try {
      await deleteDoc(doc(db, "books", bookId));
      console.log("Book deleted:", bookId);
      loadBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  // Open the edit modal for a book
  async function editBook(bookId) {
    try {
      const docRef = doc(db, "books", bookId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const bookData = docSnap.data();
        currentBookId = bookId;
        // Populate modal form with existing data
        document.getElementById("editTitle").value = bookData.title;
        document.getElementById("editAuthor").value = bookData.author;
        document.getElementById("editGenre").value = bookData.genre;
        document.getElementById("editRating").value = bookData.rating;
        // Display the modal
        editModal.style.display = "block";
      } else {
        console.log("Book doesn't exist!");
      }
    } catch (error) {
      console.error("Error fetching book for edit:", error);
    }
  }

  // Handle modal edit form submission
  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const updatedTitle = document.getElementById("editTitle").value.trim();
    const updatedAuthor = document.getElementById("editAuthor").value.trim();
    const updatedGenre = document.getElementById("editGenre").value;
    const updatedRating = document.getElementById("editRating").value;
    try {
      const docRef = doc(db, "books", currentBookId);
      await updateDoc(docRef, {
        title: updatedTitle,
        author: updatedAuthor,
        genre: updatedGenre,
        rating: updatedRating
      });
      console.log("Book updated:", currentBookId);
      editModal.style.display = "none";
      loadBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener("click", () => {
    editModal.style.display = "none";
  });

  // Optionally, close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
  });

  // Event delegation for Edit and Delete buttons in the book list
  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const bookId = e.target.getAttribute("data-id");
      deleteBook(bookId);
    } else if (e.target.classList.contains("edit-btn")) {
      const bookId = e.target.getAttribute("data-id");
      editBook(bookId);
    }
  });

  // Initial load of books
  loadBooks();
});
