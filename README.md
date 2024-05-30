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

Create a .env file in the root directory of your project and add the following variables:

   ```makefile
   	 PASSWORD=your_mongodb_password
       SECRET=your_jwt_secret```
