// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { createClient } from 'redis'; // Import createClient directly
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

app.use(cors({
  origin: "*", // Replace with your Next.js frontend URL
}));
// Create Redis client with correct URL format
const redisClient = createClient({
  url: `redis://${process.env.REDIS_PASSWORD ? `:${process.env.REDIS_PASSWORD}@` : ''}${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  // For Redis 6+ with ACL support
  username: process.env.REDIS_USERNAME || undefined,
});

// Handle Redis connection events
redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect().catch(err => console.error('Redis connection failed', err));

const port = process.env.PORT || 8080;

// Express Middleware for serving static files and parsing the request body
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Store people in chatroom
const chatters: string[] = [];

// Store messages in chatroom
const chatMessages: { user: string; message: string }[] = [];

// Start the Server
server.listen(port, () => {
  console.log(`Server Started. Listening on *:${port}`);
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join', (userId: string) => {
    chatters.push(userId);
    console.log(`${userId} joined the chat,${chatters}`);
    io.emit('chatters', chatters);
  });

  socket.on('message', async (data: { userId: string; message: string }) => {
    const { userId, message } = data;
    console.log(`Received message from ${userId}: ${message}`);
    chatMessages.push({ user: userId, message });

    // Save message to Redis
    const messageId = Date.now();
    await redisClient.hSet('messages', messageId.toString(), JSON.stringify({ userId, message }));

    io.emit('message', { userId, message });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
