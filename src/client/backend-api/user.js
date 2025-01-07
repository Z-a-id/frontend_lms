const BASE_URL =  process.env.REACT_APP_BACKEND_URL;

const UserApi = {
  borrowBook: async (isbn, userId) => {
    const res = await fetch(`${BASE_URL}/user/borrow`, {
      method: "POST",
      body: JSON.stringify({ isbn, userId }),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  // Update other methods similarly
    returnBook: async (isbn, userId) => {
    const res = await fetch(`${BASE_URL}/user/return`, {
      method: "POST",
      body: JSON.stringify({ isbn, userId }),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  getBorrowBook: async () => {
    const res = await fetch(`${BASE_URL}/user/borrowed-books`, { method: "GET" })
    return res.json()
  },
  login: async (username, password) => {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  getProfile: async () => {
    const res = await fetch(`${BASE_URL}/profile`, { method: "GET" })
    return res.json()
  },
  logout: async () => {
    const res = await fetch(`${BASE_URL}/user/logout`, { method: "GET" })
    return res.json()
  },
};

export { UserApi };