# Todo API

A simple API to manage a to-do list. This API is built with Express.js and documents its routes using OpenAPI/Swagger.

## Overview

This project allows you to create, read, and delete to-dos using a RESTful API. The API is fully documented using Swagger (OpenAPI 3.0), making it easy to interact with and test directly in the browser.

## Features

- **GET `/todos`**: Retrieve all to-dos.
- **POST `/todos`**: Create a new to-do by adding a task.
- **DELETE `/todos/{id}`**: Delete a to-do by its ID.

The API is fully documented with Swagger UI at `https://swagger-openapi-1.onrender.com/api-docs`.

## Technologies Used

- **Node.js**: Backend framework for building the API.
- **Express.js**: Web framework for building RESTful services.
- **Swagger (OpenAPI 3.0)**: Documentation for the API.
- **YAMLjs**: A library to parse YAML files (used to load Swagger documentation).

## Setup & Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/Uche-arch/swagger-openAPI.git
   cd todo-api
```

2. **Install dependencies:**

```bash
   npm install express swagger-jsdoc swagger-ui-express yamljs
```

3. **Run the server:**

```bash
  node server.js
```

## API Documentation (Swagger UI)
Once the server is running, you can access the Swagger UI to interact with the API at:

[https://swagger-openapi-1.onrender.com/api-docs]

