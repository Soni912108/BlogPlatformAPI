const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./logger/loggerTool');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', apiLimiter);

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
            description: 'API for a blogging platform',
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Connect to MongoDB
const password = process.env.PASSWORD; // Access password from environment variables
const encodedPassword = encodeURIComponent(password); // encoding for string error handling on the str_conn in mongoose.connect

mongoose
  .connect(
    `mongodb+srv://sonimailfortestuse:${encodedPassword}@backenddb.yf5ipol.mongodb.net/blog?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    logger.info("Connected to the blog database!");
    app.listen(3001, () => {
        logger.info("Server is running on port 3001");
    });
  })
  .catch((error) => {
    logger.error("Connection failed!", error);
  });
