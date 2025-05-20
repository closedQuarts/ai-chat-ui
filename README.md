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

## Challenges Encountered

- Coordinating communication between the React frontend, Firebase functions, and the Ocelot API Gateway required precise endpoint and method alignment.
- Managing CORS and authorization headers when calling the gateway from cloud functions.
- Parsing natural language reliably using OpenAI and designing consistent JSON outputs for varying user intents.
- Handling asynchronous behavior between Firestore message writes and delayed function triggers.
- Configuring Firebase project permissions to allow the frontend to write and read from Firestore.
- Debugging unexpected 401 and 404 errors from the gateway during early integration.
