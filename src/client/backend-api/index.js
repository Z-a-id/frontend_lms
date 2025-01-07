import { BookApi } from "./book";
import { UserApi } from "./user";


const BackendApi = {
  book: {
    getAllBooks: async () => BookApi.getAllBooks(),
    getBookByIsbn: async (isbn) => BookApi.getBookByIsbn(isbn),
    addBook: async (data) => BookApi.addBook(data),
    patchBookByIsbn: async (isbn, data) => BookApi.patchBookByIsbn(isbn, data),
    deleteBook: async (isbn) => BookApi.deleteBook(isbn),
  },
  user: {
    borrowBook: async (isbn, userId) => UserApi.borrowBook(isbn, userId),
    returnBook: async (isbn, userId) => UserApi.returnBook(isbn, userId),
    getBorrowBook: async () => UserApi.getBorrowBook(),
    login: async (username, password) => UserApi.login(username, password),
    getProfile: async () => UserApi.getProfile(),
    logout: async () => UserApi.logout(),
  },
};

export { BackendApi };
