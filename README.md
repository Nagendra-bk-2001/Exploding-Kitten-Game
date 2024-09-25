# 😸 Exploding Kitten Game

👋 Welcome! This project is a web-based, single-player card game where players attempt to draw cards from a deck and avoid the "Exploding Kitten" card to win. The game is built using **React** with **Redux** for the frontend, **Golang** for the backend, and **Redis** for the leaderboard. It also supports auto-saving game progress and real-time leaderboard updates.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
  - [Backend (Golang)](#backend-golang)
  - [Frontend (React + Redux)](#frontend-react--redux)
  - [Redis Setup](#redis-setup)
- [How to Play](#how-to-play)
- [Bonus Features](#bonus-features)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Overview

In **Exploding Kitten**, you can draw different types of cards from a shuffled deck:
- **Cat card** 😼: Simply removed from the deck.
- **Defuse card** 🙅‍♂️: Can be used to defuse an Exploding Kitten.
- **Shuffle card** 🔀: Shuffles the deck and restarts the game.
- **Exploding Kitten card** 💣: If drawn without a defuse card, the player loses.

The game tracks your score, auto-saves your progress, and updates the leaderboard in real-time using Redis.

## Technologies Used

- **Frontend**: React with Redux
- **Backend**: Golang
- **Database**: Redis
- **State Management**: Redux

## Features

1. **Game Mechanics**:
   - Draw cards from a shuffled deck and try to avoid the Exploding Kitten.
   - Use the Defuse card to avoid losing when you draw an Exploding Kitten.
   - Shuffle the deck and restart the game with the Shuffle card.
   
2. **Leaderboard**:
   - Track wins in real-time on the leaderboard.
   - The leaderboard updates dynamically if multiple users are playing simultaneously.

3. **Auto-Save**:
   - Game progress is automatically saved, allowing players to continue from where they left off.

## Requirements

- **Node.js** and **npm**
  - Install from [Node.js official website](https://nodejs.org/).
- **Go (Golang)**
  - Install Go from [Go installation page](https://golang.org/dl/).
- **Redis**
  - Install Redis using the official [Redis installation guide](https://redis.io/download).

## Installation and Setup

### Backend (Golang)

To set up the Golang backend:

1. **Install Go**:
   - Download and install Go from the [official website](https://golang.org/dl/).
   - After installation, verify the installation with:
     ```
     go version
     ```

2. **Install Dependencies (if any)**:
   - If a `go.mod` file exists in your backend project directory, run:
     ```
     go mod tidy
     ```

3. **Run the Golang Backend**:
   - Navigate to the backend directory.
   - Run the server using:
     ```
     go run main.go
     ```

4. The backend will run at `http://localhost:8080`.

The backend provides an endpoint:
- **GET /api/start_game**: Starts the game and returns a shuffled deck of cards.

### Frontend (React + Redux)

To set up the React frontend:

1. **Install Node.js and npm**:
   - Download and install Node.js from the [Node.js official website](https://nodejs.org/en/download/).
   - Verify the installation with:
     ```
     node -v
     npm -v
     ```

2. **Install Dependencies**:
   - Navigate to the frontend project directory.
   - Install all necessary dependencies:
     ```
     npm install
     ```

   **Required Dependencies:**
   - **React**:
     ```
     npm install react react-dom
     ```
   - **Redux and Redux Toolkit**:
     ```
     npm install @reduxjs/toolkit react-redux
     ```
   - **Axios** (optional, if you plan to make API calls to the backend):
     ```
     npm install axios
     ```

3. **Run the Frontend**:
   - Start the React frontend:
     ```
     npm start
     ```

4. The frontend will run at `http://localhost:3000`.

### Redis Setup

You will need a Redis server running to store the leaderboard data and player scores.

1. **Install Redis**:
   - Install Redis from the official [Redis website](https://redis.io/download).

   **For specific OS:**
   - **Mac** (via Homebrew):
     ```
     brew install redis
     ```
   - **Ubuntu** (via apt-get):
     ```
     sudo apt-get install redis-server
     ```
   - **Windows**: Use [Redis for Windows guide](https://redis.io/download#redis-on-windows).

2. **Start Redis**:
     ```
     redis-server
     ```

3. **Verify Redis is Running**:
- Check Redis by running the following command:
  ```
  redis-cli ping
  ```
- You should get a response: `PONG`.

## How to Play

1. Open your web browser.
2. Navigate to [http://localhost:3000](http://localhost:3000).
3. Enter a username on the title screen.
4. Click "Start Game" to begin drawing cards from the deck.

### Game Objective

Draw all the cards without hitting the Exploding Kitten to win. Your progress and leaderboard score will update in real-time
