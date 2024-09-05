// pages/index.tsx
"use client";
// pages/index.tsx
// pages/index.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // Connect to the WebSocket server

const Home = () => {
  const [userId, setUserId] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ userId: string; message: string }[]>([]);
  const [chatters, setChatters] = useState<string[]>([]);

  useEffect(() => {
    // Handle incoming messages
    socket.on('message', (data: { userId: string; message: string }) => {
      console.log(`Received message from ${data.userId}: ${data.message}`);
      setMessages(prevMessages => [...prevMessages, data]);
    });

    // Handle new chatters
    socket.on('chatters', (data: { userId: string }) => {
      console.log(`New chatter: ${data.userId}`);
      setChatters(prevChatters => [...prevChatters, data.userId]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const joinChat = () => {
    if (userId) {
      console.log(`User ${userId} joined the chat`);
      socket.emit('join', userId);
    }
  };

  const sendMessage = () => {
    if (userId && message) {
      console.log(`Sending message to ${userId}: ${message}`);
      socket.emit('message', { userId, message });
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={joinChat}>Join Chat</button>
      <textarea
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>

      <h2>Chatters</h2>
      <ul>
        {chatters.map((chatter, index) => (
          <li key={index}>{chatter}</li>
        ))}
      </ul>

      <h2>Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}><strong>{msg.userId}</strong>: {msg.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
