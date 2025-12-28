#  BookView — AI-Powered MERN Stack Bookstore

BookView is a modern, responsive **full-stack bookstore application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **AI-powered review refinement**.
It allows users to browse, search, and purchase books, manage their cart, place orders, and enhance reviews using GPT-based suggestions — delivering a next-gen reading & shopping experience.

---

##  Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **AI Integration:** OpenAI GPT API for review refinement
* **Styling:** Custom CSS + Tailwind
* **Payment Methods:** Cash on Delivery (COD)

---

##  Folder Structure

BookView/

├── frontend/   # React frontend (User Interface)

├── backend/    # Node.js + Express backend

├── .gitignore

├── README.md

└── package.json


---

##  Setup Instructions

###  Prerequisites

* **Node.js & npm** installed
* **MongoDB** running locally or MongoDB Atlas URI
* **OpenAI API Key** for AI review suggestions

---

###  Clone the Repository

```bash
git clone https://github.com/riyatyag949/BookView.git
cd BookView
```

---

###  Install Dependencies

#### For Frontend

```bash
cd frontend
npm install
```

#### For Backend

```bash
cd backend
npm install
```

---

###  Environment Setup

Create a `.env` file inside the **backend** folder and add the following:

```env
PORT=2000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
```

---

##  Running the Project

### ➤ Start Frontend (React)

```bash
cd frontend
npm start
```

Runs on **[http://localhost:3000](http://localhost:3000)**

### ➤ Start Backend (Express)

```bash
cd backend
nodemon index.js
```

Runs on **[http://localhost:2000](http://localhost:2000)**

---

##  Features

*  **Book Browsing** — View, search, and filter books by category (featured, trending, editor’s pick, etc.)
*  **Smart Search** — Directly navigate to book details if title matches
*  **Cart Management** — Add, remove, and persist cart items with backend sync
*  **Checkout & Orders** — Cash on Delivery with order history tracking
*  **AI-Powered Reviews** — Refine reviews using GPT with multiple suggestion options
*  **Star Ratings** — Submit book ratings along with reviews
*  **User Authentication** — JWT-based secure login & signup
*  **Persistent Data** — Cart, orders, and reviews saved in MongoDB
*  **Category-Based Fetching** — Optimized backend routes for featured/trending books

---

##  Show Some Love

If you enjoyed this project or found it helpful, please ⭐ star the repo and share it with others!

Your support helps make BookView even better. 

