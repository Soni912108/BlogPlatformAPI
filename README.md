# Blog Platform API

This is a backend API for a blogging platform, built using Node.js, Express.js, and MongoDB. It provides endpoints for user authentication and CRUD operations on blog posts.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Rate Limiting](#rate-limiting)
- [License](#license)

## Features

- User authentication (register and login)
- CRUD operations on blog posts
- Rate limiting to prevent abuse
- Swagger API documentation
- Error handling and logging

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- A MongoDB database (local or Atlas)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Soni912108/blog-api.git
   cd blog-api
  
2. Install the dependencies:

   ```bash
    npm install
   
##  Environment Variables

    
1.Create a .env file in the root directory of your project and add the following variables:

         MONGODB_URI=your_mongodb_uri
         SECRET=your_jwt_secret

Replace your_mongodb_password and your_jwt_secret with your actual MongoDB password and JWT secret.

## Usage 

To start the server in development mode, run:

      npm run dev

The server will be running on http://localhost:3001.

## API Documentation
The API documentation is available at http://localhost:3001/api-docs and is generated using Swagger. It provides details about all available endpoints, request parameters, and responses.

## Rate Limiting
The API has rate limiting in place to prevent abuse. By default, each IP address is limited to 100 requests per 15 minutes.

## Error Handling and Logging
The project uses Winston for logging and centralized error handling. Logs are written to the console and a combined.log file.


## Endpoints
**Authentication**

- POST /api/auth/register: Register a new user

- POST /api/auth/login: Login a user

**Posts**

- GET /api/posts: Get all posts

- POST /api/posts: Create a new post (protected)

- PUT /api/posts/
: Update a post (protected)

- DELETE /api/posts/
: Delete a post (protected)


##  License
**This project is licensed under the MIT License. See the LICENSE file for more details.**



