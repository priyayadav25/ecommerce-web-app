# E-Commerce Web Application

## Project Overview

This is a full-stack E-Commerce Web Application built using React.js, Node.js, Express.js, and MongoDB. The project allows users to view products, add products to the cart, login, and manage orders through backend APIs.

## Features

### User Features

* View Product Catalog
* Add Products to Cart
* User Login
* Order Management

### Admin Features

* Add Products
* Update Products
* Delete Products
* Manage Orders

### Backend APIs

* User Authentication API
* Product Management API
* Order Management API

## Technologies Used

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

backend/

* config/
* middleware/
* models/
* routes/
* server.js

frontend/

* public/
* src/

## Installation



### Install Backend Dependencies

cd backend

npm install

### Install Frontend Dependencies

cd frontend

npm install

### Run Backend

cd backend

npm start

### Run Frontend

cd frontend

npm start

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Products

* GET /api/products
* GET /api/products/:id
* POST /api/products
* PUT /api/products/:id
* DELETE /api/products/:id

### Orders

* POST /api/orders
* GET /api/orders/myorders

## Database

MongoDB is used for storing:

* Users
* Products
* Orders

## Author

Priya Yadav

## Project Status

Completed as an Internship Project Submission.
