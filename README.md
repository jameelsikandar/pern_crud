PERN CRUD API

A simple CRUD API built using the PERN stack:

PostgreSQL – relational database

Express.js – backend framework

React – frontend (optional if added later)

Node.js – server runtime

This project demonstrates a clean API structure, environment variable management with .env, and database connectivity using the pg package.

Features

Create, read, update, and delete user records

RESTful API endpoints

PostgreSQL connection pool using pg

Environment variables via dotenv

Structured controllers and routes

Docker-compatible setup for PostgreSQL

Project Structure
pern_crud/
│
├── src/
│   ├── config/
│   │   └── db.config.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── app.js
│   └── index.js
│
├── .env
├── package.json
└── README.md

Requirements

Node.js (v18 or later)

PostgreSQL installed locally or via Docker
