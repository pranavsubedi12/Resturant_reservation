# Namaste Nepali Kitchen (MERN Stack)

A modern full-stack restaurant management application built with the MERN stack. This project provides a seamless dining reservation experience for customers along with a powerful admin dashboard for managing bookings efficiently.

## Overview

Namaste Nepali Kitchen is a responsive restaurant web application designed to simplify table reservations and restaurant booking management. Customers can browse the restaurant landing page, explore the menu, and reserve tables online, while administrators can manage reservations through a dedicated dashboard.

## Tech Stack

### Frontend
- React.js (Create React App)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Core Features

### Customer Features
- Elegant and responsive restaurant landing page
- Interactive reservation booking form
- Real-time reservation submission
- Menu showcase section
- Mobile-friendly user interface

### Admin Features
- Reservation management dashboard
- Create new reservations
- View all reservations
- Update reservation details and status
- Delete reservations
- Reservation status tracking

### API Features
- RESTful API architecture
- CRUD operations for reservations
- MongoDB database integration
- Backend validation for reservation requests

> **Note:** Authentication and authorization are not implemented in the current version of the admin dashboard.

---

# Project Structure

```bash
Namaste-Nepali-Kitchen/
│
├── Backend/                # Express API and MongoDB configuration
│
└── Frontend/
    └── restro/             # React frontend application
```

---

# Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

---

# Environment Variables

## Backend Configuration

Create a `.env` or `config.env` file inside:

```bash
Backend/config/
```

Add the following variables:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

## Frontend Configuration

Create a `.env` file inside:

```bash
Frontend/restro/
```

Add:

```env
REACT_APP_API_URL=http://localhost:4000
```

---

# Installation & Setup

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Namaste-Nepali-Kitchen
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## 3. Start Backend Server

```bash
npm run dev
```

Backend server will start at:

```bash
http://localhost:4000
```

---

## 4. Install Frontend Dependencies

Open a new terminal:

```bash
cd Frontend/restro
npm install
```

---

## 5. Start Frontend Application

```bash
npm start
```

Frontend application will run at:

```bash
http://localhost:3000
```

---

# REST API

Base URL:

```bash
http://localhost:4000/api/reservation
```

## Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create` | Create a reservation |
| GET | `/all` | Fetch all reservations |
| PUT | `/:id` | Update reservation details |
| DELETE | `/:id` | Delete a reservation |

---

# Reservation Schema

### Required Fields
- FirstName
- LastName
- Email
- PhoneNumber
- Date
- Time

### Optional Fields
- TableNumber
- Guests
- Status (`pending`, `confirmed`, `completed`, `cancelled`)

---

# Frontend Build

To generate a production-ready frontend build:

```bash
cd Frontend/restro
npm run build
```

The optimized build files will be generated inside:

```bash
Frontend/restro/build
```

---

# Troubleshooting

### CORS Issues
Ensure the frontend URL matches the backend CORS configuration:

```env
FRONTEND_URL=http://localhost:3000
```

### MongoDB Connection Errors
- Verify your `MONGO_URI`
- Ensure your MongoDB Atlas IP whitelist includes your current network
- Check if the MongoDB service is running

### Port Conflicts
If port `4000` or `3000` is already in use, update the corresponding environment variables.

---

# Future Improvements

- Authentication & authorization for admin dashboard
- Online payment integration
- Email confirmation system
- Reservation availability checking
- Table management system
- Admin analytics dashboard
- Docker support
- Deployment configuration

---

# License

This project is open-source and available for educational and personal use.
