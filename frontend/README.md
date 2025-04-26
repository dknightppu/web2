# Classic Albums Frontend - Web2

## Overview
The Classic Albums Frontend is a static website that allows users to view, add, and modify entries in a music database. It is built using HTML, CSS, and vanilla JavaScript. It connects to a backend API to fetch and update data stored in a PostgreSQL database.

## Table of Contents
- [Overview](#overview)
- [Installation & Setup](#installation--setup)
- [Usage Instructions](#usage-instructions)
- [API Integration](#api-integration)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)

## Installation & Setup
### Prerequisites
- Basic Web Server (optional for local testing)
- Internet connection

### Steps
```bash
git clone https://github.com/dknightppu/web2.git
cd web2
You can open the index.html file directly in your browser for local testing.

The site is deployed live on Render.

Usage Instructions
Users can:

View a table of classic albums.

Add a new album via a form.

Modify an existing album via a form with a dropdown selection.

Example screenshot:

<img src="images/screenshot.png" width="500">
API Integration
The frontend connects to the backend API hosted at:

bash
Copy
Edit
https://echoa.onrender.com/api/v1/echoa
Examples:

GET all albums: fetch('https://echoa.onrender.com/api/v1/echoa')

POST new album

PUT update album

Contributing Guidelines
Fork this repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit (git commit -m 'Add feature').

Push to the branch (git push origin feature-branch).

Open a Pull Request.

License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

### 📂 For `echoa` (Backend)

Create a file inside your `echoa` project called:  
**`backend/README.md`**

Paste this **inside backend/README.md**:

```markdown
# Echoa Backend - Classic Albums API

## Overview
Echoa is the backend server for the Classic Albums project.  
It provides a RESTful API built with Node.js, Express, and PostgreSQL to manage a database of classic albums.  
The backend allows users to view all albums, add new albums, and update existing albums through API endpoints.

## Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL Database
- npm (Node package manager)

### Steps
```bash
git clone https://github.com/dknightppu/echoa.git
cd echoa
npm install
Set up a .env file at the project root:

ini
Copy
Edit
DATABASE_URL=your_postgres_database_url
PORT=8003
Then start the server:

bash
Copy
Edit
npm start
The server will run on http://localhost:8003.

API Documentation
GET /api/v1/echoa
Returns a list of all classic albums.

GET /api/v1/echoa/:id
Returns details of a specific album by ID.

POST /api/v1/echoa
Creates a new album.

PUT /api/v1/echoa/:id
Updates an existing album by ID.

Example Response
json
Copy
Edit
{
  "id": 1,
  "artist": "The Beatles",
  "album_title": "Abbey Road",
  "year": 1969,
  "genre": "Rock"
}
Database Setup
Create a PostgreSQL database named classicalbums with the following table structure:

sql
Copy
Edit
CREATE TABLE classicalbums (
  id SERIAL PRIMARY KEY,
  artist VARCHAR(255) NOT NULL,
  album_title VARCHAR(255) NOT NULL,
  year INT,
  genre VARCHAR(100)
);
Authentication & Security
CORS is enabled to allow cross-origin requests between the frontend and backend.

Environment variables are used to protect sensitive database credentials.

Deployment Guide
The backend API is deployed on Render at:

bash
Copy
Edit
https://echoa.onrender.com/api/v1/echoa
Deployment Steps:

bash
Copy
Edit
git add .
git commit -m "Deploy backend"
git push origin main
Render automatically redeploys on push.

License & Contribution Guidelines
License
This project is licensed under the MIT License.

Contributing
Fork the repository.

Create a feature branch (git checkout -b feature-branch).

Make your changes.

Push your changes (git push origin feature-branch).

Open a pull request for review.