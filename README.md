# Rendition - Theatre Society of LNMIIT

> The official digital presence of Rendition, the premier Theatre Society of The LNM Institute of Information Technology (LNMIIT).

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)

---

## 🔍 Overview
**Rendition** is a dynamic web platform designed to represent the artistic spirit of the LNMIIT Theatre Society. It serves as a central hub to showcase the society's productions, introduce the talented team behind the curtains, and provide essential contact information for collaborations.

Beyond being an informational portfolio, the platform features an interactive **enrollment system**, allowing aspiring thespians to easily register and join the club. Built with a focus on immersive user experience, the site leverages modern 3D graphics and smooth animations to reflect the creativity of the theatre arts.

## ✨ Features

### 🎭 Interactive Experience (Frontend)
- **3D Visuals & Animations**: Integrated **Three.js** (via React Three Fiber) and **GSAP** for a visually stunning, immersive experience.
- **Modern Styling**: Sleek, responsive interfaces built with **Tailwind CSS**.
- **Smooth Navigation**: Seamless page transitions and timeline views using `framer-motion` and `react-vertical-timeline-component`.
- **Media Gallery**: Optimized image and media delivery powered by **Cloudinary**.
- **Contact & Communication**: Direct integration with **EmailJS** for user inquiries.

### ⚙️ Backend & Functionality
- **Enrollment System**: A robust form handling system for new user registrations and club recruitment.
- **Secure Data Management**: Utilizes **MongoDB** and **Mongoose** for reliable storage of user data and enrollment records.
- **Authentication & Security**: Implements `bcryptjs` for data protection and `jsonwebtoken` (JWT) for secure sessions.
- **File Handling**: Efficient processing of uploads using `multer`.
- **Email Notifications**: Automated confirmation emails sent via `nodemailer`.

## 🛠 Tech Stack

### Frontend
- **Build Tool**: Vite
- **Library**: React.js
- **Styling**: Tailwind CSS, PostCSS
- **Animations & 3D**: React Three Fiber, Drei, GSAP, Framer Motion, React Tilt
- **Icons**: Lucide React
- **Services**: EmailJS, Cloudinary SDK

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT & Bcrypt
- **Utilities**: Nodemailer, Multer, Axios, Validator, Dotenv

## 📂 Folder Structure

```bash
Rendition-Website/
├── backend/        # Express API & Database Logic
├── frontend/       # React + Vite Client Application
└── README.md       # Project Documentation
```

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URI)

### Installation

Clone the repository:
```bash
git clone https://github.com/Devharsh01/Rendition-Website.git
cd Rendition-Website
```

**1. Backend Setup**
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

**2. Frontend Setup**
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

### Environment Variables

To ensure the application runs correctly, you must configure the environment variables.

**Backend (.env)**
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

**Frontend (.env)**
Create a `.env` file in the `frontend/` directory (if required by your Vite setup) or ensure your Cloudinary/EmailJS keys are configured in your source files as needed.

## ⚡ Running the Project

To run the full stack application, you will need two terminal windows.

**Start Backend Server:**
```bash
cd backend
# Start the server (usually runs on port 5000)
npm start
# or if using nodemon for dev:
npx nodemon index.js
```

**Start Frontend Application:**
```bash
cd frontend
# Start the Vite development server (usually runs on port 5173)
npm run dev
```

## 🤝 Contributing
We welcome contributions to improve the Rendition website!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.
