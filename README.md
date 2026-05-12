# Namaste Nepali Kitchen (MERN)

Restaurant landing page + table reservation system.

- **Frontend:** React (Create React App) + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB (Mongoose)

## Features

- Public site at `/` with menu + reservation form
- Admin dashboard at `/admin` to **create / view / update / delete** reservations
- REST API under `/api/reservation/*`

> Note: The admin page is not authenticated in the current codebase.

## Project Structure

- `Backend/` — Express API + MongoDB
- `Frontend/restro/` — React app

## Prerequisites

- Node.js (LTS recommended)
- A MongoDB connection string (MongoDB Atlas or local MongoDB)

### Frontend (optional) (`Frontend/restro/.env`)

The frontend defaults to `http://localhost:4000` for the API, but you can override it:

```env
REACT_APP_API_URL=http://localhost:4000
```

## Run Locally (Development)

### 1) Start the backend API

```bash
cd Backend
npm install
npm run dev
```

The API will run on `http://localhost:4000` (if `PORT=4000`).

### 2) Start the frontend

In a second terminal:

```bash
cd Frontend/restro
npm install
npm start
```

Open `http://localhost:3000`.

## API Endpoints

Base path: `http://localhost:4000/api/reservation`

### Create reservation

`POST /create`

Required fields (per backend validation):
- `FirstName`, `LastName`, `Email`, `PhoneNumber`, `Date`, `Time`

Optional fields:
- `TableNumber` (number)
- `Guests` (number, default `1`)
- `Status` (`pending | confirmed | completed | cancelled`)

Example:

```bash
curl -X POST http://localhost:4000/api/reservation/create \
  -H "Content-Type: application/json" \
  -d '{
    "FirstName": "Alex",
    "LastName": "Shrestha",
    "Email": "alex@example.com",
    "PhoneNumber": "9800000000",
    "Date": "2026-05-12",
    "Time": "18:30",
    "Guests": 2,
    "Status": "pending"
  }'
```

### List reservations

`GET /all`

### Update reservation

`PUT /:id`

- Send only the fields you want to update.

### Delete reservation

`DELETE /:id`

## Build (Frontend)

```bash
cd Frontend/restro
npm run build
```

This outputs a production build to `Frontend/restro/build`.

## Common Troubleshooting

- **CORS error:** ensure `FRONTEND_URL` in `Backend/config/config.env` matches the frontend origin (`http://localhost:3000`).
- **MongoDB connection fails:** verify `MONGO_URI` and that your IP/network is allowed (Atlas Network Access).
- **Port already in use:** change `PORT` in `Backend/config/config.env`.
