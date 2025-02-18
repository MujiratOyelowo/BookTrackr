import { filterAndDisplayBooks } from "./filterBooks.js";
import { db } from "../scripts/firebase.js";
import { collection, getDocs, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.getElementById("bookList");
  const searchBar = document.getElementById("searchBar");
  const filterGenre = document.getElementById("filterGenre");

  const organizeBySelect = document.getElementById("organizeBy"); // Organize dropdown on My Books page

  // Modal elements for editing
  const editModal = document.getElementById("editModal");
  const editForm = document.getElementById("editForm");
  const closeModalBtn = document.querySelector(".close-btn");

  // Modal elements for delete confirmation
  const deleteModal = document.getElementById("deleteModal");
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  const cancelDeleteBtn = document.getElementById("cancelDelete");

  // Variables to store current book id being edited or deleted
  let currentBookId = null;
  let currentDeleteBookId = null;

  // Load books function with ordering
  async function loadBooks() {
    bookList.innerHTML = "";
    const booksCollection = collection(db, "books");
    const bookSnapshot = await getDocs(booksCollection);
    let books = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Apply ordering based on dropdown value (if it exists)
    if (organizeBySelect) {
      const criteria = organizeBySelect.value;
      if (criteria === "genre") {
        books = books.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (criteria === "author") {
        books = books.sort((a, b) => a.author.localeCompare(b.author));
      }
    }

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

  // Deleting Confirmation Modal Handlers
  confirmDeleteBtn.addEventListener("click", () => {
    if (currentDeleteBookId) {
      deleteBook(currentDeleteBookId);
      currentDeleteBookId = null;
    }
    deleteModal.style.display = "none";
  });

  cancelDeleteBtn.addEventListener("click", () => {
    currentDeleteBookId = null;
    deleteModal.style.display = "none";
  });

  // Opening the edit modal for a book
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
        // Displaying the modal
        editModal.style.display = "block";
      } else {
        console.log("Book doesn't exist!");
      }
    } catch (error) {
      console.error("Error fetching book for edit:", error);
    }
  }

  // Handling modal edit form submission
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

  // Closing the edit modal when the close button is clicked
  closeModalBtn.addEventListener("click", () => {
    editModal.style.display = "none";
  });

  // closing modals when clicking outside their content
  window.addEventListener("click", (event) => {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
    if (event.target === deleteModal) {
      deleteModal.style.display = "none";
    }
  });

  // Event delegation for Edit and Delete buttons in the book list
  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      // Instead of immediately deleting, show the delete confirmation modal
      currentDeleteBookId = e.target.getAttribute("data-id");
      deleteModal.style.display = "block";
    } else if (e.target.classList.contains("edit-btn")) {
      const bookId = e.target.getAttribute("data-id");
      editBook(bookId);
    }
  });

  // Adding an event listener for the organizeBy dropdown to reload books when changed
  if (organizeBySelect) {
    organizeBySelect.addEventListener("change", () => {
      loadBooks();
    });
  }

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
  
  //calling applyFilters() on page load to display all books if filters are empty
  applyFilters();
  // Initial load of books
  loadBooks();
});