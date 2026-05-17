# 🍽️ Namaste Nepali Kitchen — Backend API

A scalable and modern backend system for a restaurant reservation and management platform built using Node.js, Express.js, and MongoDB.

This backend provides a complete RESTful API for handling restaurant reservations with CRUD operations, validation, and database integration.

---

# 🚀 Backend Features

- RESTful API architecture
- Reservation management system
- Create, Read, Update, Delete operations
- MongoDB database integration
- Mongoose schema validation
- Error handling middleware
- Environment-based configuration
- Modular folder structure
- Scalable backend architecture
- CORS enabled for frontend integration

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon
- CORS

---

# 📂 Backend Project Structure

```bash
Backend/
│
├── controllers/
├── database/
├── middleware/
├── models/
├── routes/
├── app.js
├── index.js
├── package.json
└── .env
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `Backend` directory.

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

---

# 📦 Installation & Setup

## Clone Repository

```bash
git clone <your-repository-url>
cd Namaste-Nepali-Kitchen/Backend
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:4000
```

---

# 🌐 API Base URL

```bash
http://localhost:4000/api/reservation
```

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create` | Create reservation |
| GET | `/all` | Get all reservations |
| PUT | `/:id` | Update reservation |
| DELETE | `/:id` | Delete reservation |

---

