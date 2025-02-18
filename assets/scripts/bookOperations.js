import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";

// Global modal variables
let editModal, editForm, closeModalBtn;
let deleteModal, confirmDeleteBtn, cancelDeleteBtn;
let currentBookId = null;
let currentDeleteBookId = null;

//function to add a book
export async function addBook(title, author, genre, rating) {
  try {
    await addDoc(collection(db, "books"), { title, author, genre, rating });
    await loadBooks();
    return true;
  } catch (error) {
    console.error("Error adding book:", error);
    return false;
  }
}

//function to edit a book
export async function editBook(oldTitle, newTitle, newAuthor, newGenre, newRating) {
  try {
    const booksCollection = collection(db, "books");
    const snapshot = await getDocs(booksCollection);
    const bookDoc = snapshot.docs.find(
      (doc) => doc.data().title.toLowerCase() === oldTitle.toLowerCase()
    );
    if (bookDoc) {
      await updateDoc(doc(db, "books", bookDoc.id), {
        title: newTitle,
        author: newAuthor,
        genre: newGenre,
        rating: newRating,
      });
      await loadBooks();
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error editing book:", error);
    return false;
  }
}

//function to delete a book
export async function deleteBookByTitle(title) {
  try {
    const booksCollection = collection(db, "books");
    const snapshot = await getDocs(booksCollection);
    const bookDoc = snapshot.docs.find(
      (doc) => doc.data().title.toLowerCase() === title.toLowerCase()
    );
    if (bookDoc) {
      await deleteDoc(doc(db, "books", bookDoc.id));
      await loadBooks();
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
}

//function to load all books
export async function loadBooks() {
  const bookList = document.getElementById("bookList");
  if (!bookList) return;
  try {
    const booksCollection = collection(db, "books");
    const snapshot = await getDocs(booksCollection);
    const allBooks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    bookList.innerHTML = "";
    allBooks.forEach((book) => {
      displayBook(book, bookList);
    });
  } catch (error) {
    console.error("Error loading books:", error);
  }
}

//function to display a book
export function displayBook(book, bookList) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span><strong>${book.title}</strong> by ${book.author} (${book.genre}) ⭐${book.rating}</span>
    <button class="edit-btn" data-id="${book.id}">Edit</button>
    <button class="delete-btn" data-id="${book.id}">Delete</button>
  `;
  bookList.appendChild(li);
}

//function to show the edit and delete modals
export function initializeModals() {
  // Grabbing the modal elements after DOM has loaded
  editModal = document.getElementById("editModal");
  editForm = document.getElementById("editForm");
  closeModalBtn = document.querySelector(".close-btn");
  
  deleteModal = document.getElementById("deleteModal");
  confirmDeleteBtn = document.getElementById("confirmDelete");
  cancelDeleteBtn = document.getElementById("cancelDelete");
  
  // Set up edit modal closing event
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", hideEditModal);
  }
  
  // Close modals when clicking outside modal content
  window.addEventListener("click", (event) => {
    if (event.target === editModal) hideEditModal();
    if (event.target === deleteModal) hideDeleteModal();
  });
  
  // Delete modal confirmation handlers
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener("click", async () => {
      if (currentDeleteBookId) {
        await deleteBook(currentDeleteBookId);
        currentDeleteBookId = null;
      }
      hideDeleteModal();
    });
  }
  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener("click", () => {
      currentDeleteBookId = null;
      hideDeleteModal();
    });
  }
  
  // Set up edit modal form submission
  if (editForm) {
    editForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const updatedTitle = document.getElementById("editTitle").value.trim();
      const updatedAuthor = document.getElementById("editAuthor").value.trim();
      const updatedGenre = document.getElementById("editGenre").value;
      const updatedRating = document.getElementById("editRating").value;
      try {
        await updateDoc(doc(db, "books", currentBookId), {
          title: updatedTitle,
          author: updatedAuthor,
          genre: updatedGenre,
          rating: updatedRating,
        });
        hideEditModal();
        await loadBooks();
      } catch (error) {
        console.error("Error updating book:", error);
      }
    });
  }
}

//function to update the book
export function showEditModal(bookId) {
  getDoc(doc(db, "books", bookId))
    .then((docSnap) => {
      if (docSnap.exists()) {
        const bookData = docSnap.data();
        currentBookId = bookId;
        document.getElementById("editTitle").value = bookData.title;
        document.getElementById("editAuthor").value = bookData.author;
        document.getElementById("editGenre").value = bookData.genre;
        document.getElementById("editRating").value = bookData.rating;
        if (editModal) {
          editModal.style.display = "block";
        }
      } else {
        console.log("Book doesn't exist!");
      }
    })
    .catch((error) => {
      console.error("Error fetching book for edit:", error);
    });
}

//function to hide the edit modal
export function hideEditModal() {
  if (editModal) {
    editModal.style.display = "none";
  }
}

//function to show delete modal
export function showDeleteModal(bookId) {
  currentDeleteBookId = bookId;
  if (deleteModal) {
    deleteModal.style.display = "block";
  }
}

//function to hide delete modal
export function hideDeleteModal() {
  if (deleteModal) {
    deleteModal.style.display = "none";
  }
}

// Helper function to delete a book by ID (used by modal handlers)
async function deleteBook(bookId) {
  try {
    await deleteDoc(doc(db, "books", bookId));
    await loadBooks();
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
}
