import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc, query, where } from "firebase/firestore";
import log from "loglevel"

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements for main functionality
    const bookForm = document.getElementById("bookForm");
    const bookList = document.getElementById("bookList");
    const searchBar = document.getElementById("searchBar");
    const filterGenre = document.getElementById("filterGenre");

    // Modal elements for editing
    const editModal = document.getElementById("editModal");
    const editForm = document.getElementById("editForm");
    const closeModalBtn = document.querySelector(".close-btn");

    // Variable to store the current book id being edited
    let currentBookId = null;

    // Close modal when the close button is clicked
    closeModalBtn.addEventListener("click", () => {
        editModal.style.display = "none";
    });

    // Optional: Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    });

    // 🌟 Function to Add a Book
    async function addBook(title, author, genre, rating) {
        try {
            const docRef = await addDoc(collection(db, "books"), { title, author, genre, rating });
            log.info("Book added with ID:", docRef.id);
            loadBooks(); // Refresh book list
        } catch (error) {
            log.error("Error adding book:", error);
        }
    }

    // 🌟 Function to Fetch Books from Firebase
    async function loadBooks() {
        bookList.innerHTML = ""; // Clear list before loading
        try {
            const booksCollection = collection(db, "books");
            const bookSnapshot = await getDocs(booksCollection);
            const books = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(books);

            books.forEach(book => displayBook(book));
        } catch (error) {
            console.error("Error loading books:", error);
        }
    }

    // 🌟 Function to Display a Book in the UI
    function displayBook(book) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${book.title}</strong> by ${book.author} (${book.genre}) ⭐${book.rating}</span>
            <button class="edit-btn" data-id="${book.id}">Edit</button>
            <button class="delete-btn" data-id="${book.id}">Delete</button>
        `;
        bookList.appendChild(li);
    }

    // 🌟 Function to Delete a Book
    async function deleteBook(bookId) {
        try {
            await deleteDoc(doc(db, "books", bookId));
            console.log("Book deleted:", bookId);
            loadBooks(); // Refresh book list
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    // 🌟 Function to Open the Edit Modal for a Book
    async function editBook(bookId) {
        try {
            const docRef = doc(db, "books", bookId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const bookData = docSnap.data();
                currentBookId = bookId;
                // Populate modal form with existing book data
                document.getElementById("editTitle").value = bookData.title;
                document.getElementById("editAuthor").value = bookData.author;
                document.getElementById("editGenre").value = bookData.genre;
                document.getElementById("editRating").value = bookData.rating;
                // Show the modal
                editModal.style.display = "block";
            } else {
                console.log("Book doesn't exist!");
            }
        } catch (error) {
            console.error("Error fetching book for edit:", error);
        }
    }

    // 🌟 Handle Modal Edit Form Submission
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

     // 🌟 Handle Form Submission
     bookForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        // Get form values
        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const genre = document.getElementById("genre").value;
        const rating = document.getElementById("rating").value;

        if (title && author && genre && rating) {
            addBook(title, author, genre, rating);
            bookForm.reset(); // Clear form fields
        }
    });

    // 🌟 Handle Book Deletion and Editing (Event Delegation) for the book list
    bookList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const bookId = e.target.getAttribute("data-id");
            deleteBook(bookId);
        } else if (e.target.classList.contains("edit-btn")) {
            const bookId = e.target.getAttribute("data-id");
            editBook(bookId);
        }
    });

    // 🌟 Handle Search & Filter
    searchBar.addEventListener("input", filterBooks);
    filterGenre.addEventListener("change", filterBooks);

    async function filterBooks() {
        const searchText = searchBar.value.toLowerCase();
        const selectedGenre = filterGenre.value;

        try {
            const booksCollection = collection(db, "books");
            const bookSnapshot = await getDocs(booksCollection);
            const books = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const filteredBooks = books.filter(book => {
                const matchesSearch = book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText);
                const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
                return matchesSearch && matchesGenre;
            });

            bookList.innerHTML = ""; // Clear list before filtering
            filteredBooks.forEach(book => displayBook(book));
        } catch (error) {
            console.error("Error filtering books:", error);
        }
    }

    // 🌟 Load Books on Page Load
    loadBooks();
});


log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");