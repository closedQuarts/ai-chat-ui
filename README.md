
# AI Chat UI

This project is the frontend component of the SE4458 Assignment 2 – AI Chat Agent system. It provides a real-time chat interface built with React, enabling users to send natural language messages and view responses from the backend.

## Features

- Real-time messaging via Firestore
- Automatic display of bot responses
- Sends user messages to Firestore
- React-based UI with Firebase integration

## Installation

```bash
npm install
npm start
```

Create a `.env` file in the root directory with the following Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

## Related Repositories

Firebase Function: firabase-chat-agent  
API Gateway: ocelot-gateway

## Developer

Name: Efe Demirtaş  
Course: SE4458 Software Architecture (Spring 2025)  
Project: AI Chat Agent (Frontend)
