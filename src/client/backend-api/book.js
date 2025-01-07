const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const BookApi = {
  getAllBooks: async () => {
    const res = await fetch(`${BASE_URL}/book`, { method: "GET" });
    return res.json();
  },
  getBookByIsbn: async (bookIsbn) => {
    const res = await fetch(`${BASE_URL}/book/${bookIsbn}`, { method: "GET" });
    return res.json();
  },
  addBook: async (data) => {
    const res = await fetch(`${BASE_URL}/book`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  patchBookByIsbn: async (bookIsbn, data) => {
    const res = await fetch(`${BASE_URL}/book/${bookIsbn}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  deleteBook: async (bookIsbn) => {
    const res = await fetch(`${BASE_URL}/book/${bookIsbn}`, { method: "DELETE" });
    return res.json();
  },
};

export { BookApi };
