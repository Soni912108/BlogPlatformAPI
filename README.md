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
- [Error Handling and Logging](#error-handling-and-logging)
- [Contributing](#contributing)
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
   git clone https://github.com/your-username/blog-platform-api.git
   cd blog-platform-api
  


2. Install the dependencies:

   ```bash
    npm install

3.Create a .env file in the root directory and add your MongoDB connection password and other environment variables (see Environment Variables for details).

##  Environment Variables

    
1.Create a .env file in the root directory of your project and add the following variables:

         PASSWORD=your_mongodb_password
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

##  Contributing
**Contributions are welcome! Please follow these steps:**

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.


##  License
**This project is licensed under the MIT License. See the LICENSE file for more details.**


### Explanation

- **Features**: Lists the main features of your project.
- **Prerequisites**: Mentions the requirements to run the project.
- **Installation**: Provides steps to clone the repo and install dependencies.
- **Environment Variables**: Instructs how to set up necessary environment variables.
- **Usage**: Describes how to start the server.
- **API Documentation**: Points to the Swagger documentation URL.
- **Rate Limiting**: Briefly explains the rate limiting implemented.
- **Error Handling and Logging**: Mentions the logging mechanism.
- **Endpoints**: Lists the API endpoints with their descriptions.
- **Contributing**: Provides steps for contributing to the project.
- **License**: States the project's license.

