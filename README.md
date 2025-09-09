# Course Management API

A comprehensive course management system built with Express.js, TypeScript, and MongoDB. This API provides user authentication, course management, and purchase functionality with role-based access control.

## 🚀 Features

- **User Authentication & Authorization**

  - User registration and login
  - JWT-based authentication
  - Role-based access control (Admin/User)
  - Password hashing with bcrypt

- **Course Management**

  - Create, read, update, and delete courses
  - Course details with title, description, price, and instructor
  - Admin-only course creation and deletion

- **Purchase System**

  - Course purchase functionality
  - Purchase history tracking
  - User-specific purchase records

- **Data Validation**
  - Request validation using Zod
  - Type-safe API endpoints
  - Comprehensive error handling

## 🛠️ Tech Stack

- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Security**: bcrypt for password hashing, CORS enabled
- **Development**: ts-node-dev for hot reloading

## 📋 Prerequisites

- Node.js 18 or higher
- MongoDB (local instance or cloud URI)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/alaminhossa1n/course-management-techorbit-server
cd course-management-techorbit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root with the following variables:

```bash
# Server Configuration
PORT=4000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/techorbit_db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
```

### 4. Start the development server

```bash
npm run dev
```

The server will start on `http://localhost:4000`

### 5. Build for production

```bash
npm run build
npm start
```

## 📚 API Endpoints

### Authentication Endpoints

#### Register User

```http
POST /api/v1/user/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User created successfully",
  "newUser": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-09-01T10:00:00.000Z",
    "updatedAt": "2023-09-01T10:00:00.000Z"
  }
}
```

#### Login User

```http
POST /api/v1/user/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Signed In Successfully",
  "user": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Course Endpoints

#### Create Course (Admin Only)

```http
POST /api/v1/course/create
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "Advanced TypeScript",
  "description": "Learn advanced TypeScript concepts and best practices",
  "price": 99.99,
  "instructor": "Jane Smith"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Course created successfully",
  "newCourse": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
    "title": "Advanced TypeScript",
    "description": "Learn advanced TypeScript concepts and best practices",
    "price": 99.99,
    "instructor": "Jane Smith",
    "createdAt": "2023-09-01T10:00:00.000Z",
    "updatedAt": "2023-09-01T10:00:00.000Z"
  }
}
```

#### Get All Courses

```http
GET /api/v1/course/all-courses
```

**Response:**

```json
{
  "success": true,
  "message": "Courses fetched successfully",
  "courses": [
    {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
      "title": "Advanced TypeScript",
      "description": "Learn advanced TypeScript concepts and best practices",
      "price": 99.99,
      "instructor": "Jane Smith"
    }
  ]
}
```

#### Get Single Course

```http
GET /api/v1/course/single-course/:courseId
```

#### Delete Course (Admin Only)

```http
DELETE /api/v1/course/delete/:courseId
Authorization: Bearer <jwt-token>
```

### Purchase Endpoints

#### Purchase Course

```http
POST /api/v1/purchase/make-purchase
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "courseId": "64f1a2b3c4d5e6f7g8h9i0j2",
  "amount": 99.99
}
```

**Response:**

```json
{
  "success": true,
  "message": "Course purchased successfully",
  "result": {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j3",
    "purchasedBy": "64f1a2b3c4d5e6f7g8h9i0j1",
    "courseId": "64f1a2b3c4d5e6f7g8h9i0j2",
    "amount": 99.99,
    "date": "2023-09-01T10:00:00.000Z"
  }
}
```

#### Get User's Purchased Courses

```http
GET /api/v1/purchase/me
Authorization: Bearer <jwt-token>
```

**Response:**

```json
{
  "success": true,
  "message": "Purchased courses fetched successfully",
  "purchases": [
    {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j3",
      "purchasedBy": "64f1a2b3c4d5e6f7g8h9i0j1",
      "courseId": {
        "_id": "64f1a2b3c4d5e6f7g8h9i0j2",
        "title": "Advanced TypeScript",
        "description": "Learn advanced TypeScript concepts and best practices",
        "price": 99.99,
        "instructor": "Jane Smith"
      },
      "amount": 99.99,
      "date": "2023-09-01T10:00:00.000Z"
    }
  ]
}
```

### Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "ok"
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```http
Authorization: Bearer <your-jwt-token>
```

### User Roles

- **admin**: Can create, update, and delete courses
- **user**: Can purchase courses and view their purchase history

## 📁 Project Structure

```
src/
├── App/
│   ├── Errors/
│   │   └── AppError.ts          # Custom error class
│   ├── Middleware/
│   │   ├── auth.ts              # JWT authentication middleware
│   │   └── globalErrorHandler.ts # Global error handling
│   └── Modules/
│       ├── User/
│       │   ├── user.controller.ts
│       │   ├── user.model.ts
│       │   ├── user.route.ts
│       │   ├── user.service.ts
│       │   └── user.validation.ts
│       ├── Course/
│       │   ├── course.controller.ts
│       │   ├── course.model.ts
│       │   ├── course.route.ts
│       │   ├── course.service.ts
│       │   └── course.validation.ts
│       └── Purchase/
│           ├── purchase.controller.ts
│           ├── purchase.model.ts
│           ├── purchase.route.ts
│           ├── purchase.service.ts
│           └── purchase.validation.ts
├── db/
│   └── connect.ts               # MongoDB connection
├── app.ts                       # Express app configuration
├── server.ts                    # HTTP server setup
└── index.ts                     # Application entry point
```

## 🛡️ Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Different permissions for admin and user roles
- **Input Validation**: All inputs are validated using Zod schemas
- **CORS**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error handling with custom error classes