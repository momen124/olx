import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
  text: string;
  time: string;
  sender: 'self' | 'other'; // Ensure this matches the data being passed
}

const ChatWindow: React.FC<{ conversationId: string }> = ({ conversationId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = io('http://localhost:5000'); // Update with your backend WebSocket URL
    setSocket(socket);

    // Fetch previous messages for the selected conversation
    socket.emit('joinConversation', conversationId);
    socket.on('loadMessages', (msgs: Message[]) => {
      setMessages(msgs);
    });

    // Listen for new messages
    socket.on('newMessage', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [conversationId]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        sender: 'self',
      };

      // Send message through WebSocket
      socket?.emit('sendMessage', { conversationId, message });
      
      // Update state
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <div className="w-2/3 flex flex-col">
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <h3 className="font-semibold">Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end ${msg.sender === 'self' ? 'justify-end' : ''}`}>
              {msg.sender === 'self' && <span className="text-xs text-gray-500 mr-2">{msg.time}</span>}
              <div className={`${msg.sender === 'self' ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded-lg py-2 px-4 max-w-xs`}>
                <p>{msg.text}</p>
              </div>
              {msg.sender === 'other' && <span className="text-xs text-gray-500 ml-2">{msg.time}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
