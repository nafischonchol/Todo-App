# Fullstack Todo App - Learning Project

This is a simple Todo application built as a **learning project** using **Laravel** for the backend API and **Next.js** for the frontend UI.

---

## Project Overview

- **Frontend:** Next.js (React)
  - Built with App Router and client components
  - Add new todos
  - Display todo list from backend
  - Handle form with React hooks (`useState`, `useEffect`)
- **Backend:** Laravel API
  - RESTful API endpoints for managing todos
  - Stores todos in a database
  - CORS-enabled for frontend access

---

## Project Structure
- backend: Laravel API project (runs on port 8000)
- frontend: Next.js frontend project (runs on port 3000)

## Backend Setup (Laravel)

```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

## Frontend Setup (Nextjs)
cd frontend
cp .env.local.example .env.local
# inside .env.local
# NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

npm install
npm run dev

