# Getting Started with Create React App
# Library Management System (LMS)

This is a full-stack *Library Management System (LMS)* project, built using React.js for the frontend and Node.js with Express.js for the backend. It enables library administrators and users to manage books, borrow books, and track availability seamlessly.

---

## *Features*
- *Admin Dashboard*: Add, edit, and delete books.
- *User Dashboard*: Borrow and return books.
- *Authentication*: Login/logout functionality for admins and users.
- *Responsive Design*: Fully responsive UI with modern aesthetics.

---

## *Setup Instructions*

### Prerequisites
- *Node.js* (v14 or higher)
- *npm* or *yarn*
- *MongoDB* (local or cloud-hosted instance)

---

### *1. Clone the Repository*
bash
git clone https://github.com/your-repository-url/library-management-system.git
cd library-management-system


---

### *2. Backend Setup*
1. Navigate to the backend folder:
   bash
   cd backend
   

2. Install dependencies:
   bash
   npm install
   

3. Create a .env file in the backend directory and add the following:
   env
   DB_URI=mongodb://localhost:27017
   DB_NAME=library_db
   PORT=5000
   
   Replace DB_URI with your MongoDB connection string if using a cloud-hosted database.

4. Start the backend server:
   bash
   npm start
   
   The backend server will run at http://localhost:5000.

---

### *3. Frontend Setup*
1. Navigate to the frontend folder:
   bash
   cd ../frontend
   

2. Install dependencies:
   bash
   npm install
   

3. Create a .env file in the frontend directory and add the following:
   env
   REACT_APP_BACKEND_URL=http://localhost:5000/v1
   
   Replace http://localhost:5000 with your deployed backend URL if applicable.

4. Start the frontend development server:
   bash
   npm start
   
   The frontend will run at http://localhost:3000.

---

### *4. Deployment Instructions*

#### *Backend Deployment (Render)*
1. Push your backend code to a Git repository.
2. Deploy the backend to [Render](https://render.com):
   - Set the build command to npm install.
   - Set the start command to node src/app.js.
   - Add environment variables (DB_URI, DB_NAME, PORT).

#### *Frontend Deployment (Vercel)*
1. Push your frontend code to a Git repository.
2. Deploy the frontend to [Vercel](https://vercel.com):
   - Set the root directory to the frontend folder.
   - Add the environment variable REACT_APP_BACKEND_URL pointing to your deployed backend URL.

---

## *Usage*

1. *Admin Login*:
   - Use the default admin credentials to log in (set in the backend during setup).

2. *User Login*:
   - Register as a user or use provided test credentials.

3. *Manage Books*:
   - Admins can add, edit, and delete books.
   - Users can view book availability, borrow books, and return them.

---

## *Tech Stack*

### *Frontend*
- React.js
- Material-UI

### *Backend*
- Node.js
- Express.js
- MongoDB

---

## *Contributing*
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch-name).
3. Commit changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch-name).
5. Open a Pull Request.

---
## *Screenshots of website*
![image](https://github.com/user-attachments/assets/ad327a38-2a7e-434b-9bc7-d2698b1c9e13)
![image](https://github.com/user-attachments/assets/fcc65447-a663-4787-89bc-d0664072b2cf)
![image](https://github.com/user-attachments/assets/7a7ff8ab-64b8-4a9d-9978-b3ed0e65e67a)
![image](https://github.com/user-attachments/assets/fff17832-ae8b-4c5b-a6db-6d95aff3b96b)
![image](https://github.com/user-attachments/assets/b782448c-7ec3-4918-b7db-5cbd4aecdfeb)
![image](https://github.com/user-attachments/assets/a9773cf4-3ef3-49bc-adcb-3bd5c080838f)


---
## *Link to  websute*
https://frontend-lms-zaid.vercel.app


