# Flight Status and Notifications

## Overview

This project is a full-stack application that provides real-time flight status updates and notifications to passengers. It features a web frontend built with React, a backend API built with Node.js and Express, and a MongoDB database. Notifications are sent using Firebase Cloud Messaging (FCM).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Firebase Setup](#firebase-setup)
- [Functionality](#functionality)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **Real-Time Updates:** Display current flight status including delays, cancellations, and gate changes.
- **Push Notifications:** Send notifications for flight status changes via FCM.
- **CRUD Operations:** Add, view, and update flight details.

## Tech Stack

- **Frontend:** HTML, CSS, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Notifications:** Firebase Cloud Messaging (FCM)
- **Message Broker (Optional):** Kafka (for advanced features)

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or remotely.

### Clone the Repository

```bash
git clone https://github.com/your-repo/flight-status-notifications.git
cd flight-status-notifications
```

## Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the React development server:**

    ```bash
    npm start
    ```

## Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the backend server:**

    ```bash
    npm start
    ```

## Running the Application

1. **Ensure MongoDB is running.**

2. **Start the backend server (`backend` directory):**

    ```bash
    npm start
    ```

3. **Start the React frontend (`frontend` directory):**

    ```bash
    npm start
    ```

4. **Open your browser and navigate to `http://localhost:3001` to see the application.**

## API Endpoints

### Get All Flights

- **URL:** `/api/flights`
- **Method:** `GET`
- **Description:** Retrieve all flight details.
- **Response:** JSON array of flight objects.

### Add a New Flight

- **URL:** `/api/flights`
- **Method:** `POST`
- **Description:** Add a new flight.
- **Body:**
    ```json
    {
      "flightNumber": "BB123",
      "airline": "Lufthansa",
      "status": "Delayed",
      "gate": "B1",
      "scheduledTime": "2024-08-11T10:00:00",
      "updatedTime": "2024-08-11T10:00:00"
    }
    ```
- **Response:** JSON object of the newly created flight.

### Update Flight Status

- **URL:** `/api/flights/:id`
- **Method:** `PATCH`
- **Description:** Update the status of an existing flight.
- **Body:**
    ```json
    {
      "status": "On Time",
      "gate": "B2"
    }
    ```
- **Response:** JSON object with the updated flight details.

## Firebase Setup

1. **Create a Firebase project:**

    - Go to [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.

2. **Add Firebase to your web app:**

    - Navigate to Project Settings > General > Your apps.
    - Register your app and copy the Firebase config.

3. **Add Firebase config to your frontend:**

    - Update `frontend/src/firebase.js` with your Firebase configuration.

## Functionality

- **Add Flights:** A form on the frontend allows users to input flight details and submit them to the backend. The new flight data is saved in the MongoDB database.

- **Update Flight Status:** Users can update flight status through a form or directly via API requests. The updated status is reflected in the MongoDB database and in the UI.

- **Real-Time Notifications:** When flight statuses are updated, notifications are sent to users via Firebase Cloud Messaging. Notifications appear on the web screen with details about the previous and updated flight status.

- **Live Data Display:** The frontend fetches flight data from the backend API and displays it in a table. Any changes to the flight status are updated in real-time.

## Troubleshooting

- **CORS Issues:** Ensure `cors` middleware is added to your Express server and configured correctly.

- **MongoDB Connection Issues:** Verify MongoDB server is running and connection string is correct.

- **Firebase Issues:** Check Firebase configuration and permissions.
