import React, { useState, useRef } from 'react';

// Chat Conversation Component
const ChatConversation: React.FC = () => {
    // Define the message structure
    type Message = {
        sender: string;
        content: string;
        time: string;
        type: 'sent' | 'received'; // Restrict type to 'sent' or 'received'
    };

    // State to hold the messages
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'John Doe', content: 'Is the item still available?', time: '2 mins ago', type: 'received' },
        { sender: 'You', content: 'Yes, it is!', time: '1 min ago', type: 'sent' },
        { sender: 'Jane Smith', content: 'I will pick it up tomorrow!', time: '1 hour ago', type: 'received' },
    ]);

    const [inputValue, setInputValue] = useState('');
    const chatBoxRef = useRef<HTMLDivElement>(null); // Reference to the chat box for scrolling

    // Function to send a message
    const sendMessage = () => {
        if (inputValue.trim() !== '') { // Check if the input field is not empty
            const newMessage: Message = { // Explicitly define the type here
                sender: 'You',
                content: inputValue,
                time: 'Just now',
                type: 'sent', // This should always be 'sent'
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]); // Update messages state with the new message
            setInputValue(''); // Clear the input field

            // Scroll to the bottom of the chat box
            if (chatBoxRef.current) {
                chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100"> {/* Main chat page container */}
            {/* Navbar */}
            <nav className="bg-teal-700 text-white p-4 text-center"> {/* Navbar styling */}
                <h1 className="text-lg font-bold">Chat Application</h1>
            </nav>

            {/* Main chat content */}
            <main className="flex-grow p-5"> {/* Main chat content area */}
                <div
                    ref={chatBoxRef}
                    className="flex-grow overflow-y-auto bg-white rounded-lg p-4 shadow" // Chat box styling
                >
                    {/* Render chat messages */}
                    {messages.map((msg, index) => (
                        <div key={index} className={`message mb-2 p-2 rounded ${msg.type === 'sent' ? 'bg-blue-100 text-right' : 'bg-yellow-100'}`}>
                            <strong>{msg.sender}</strong>
                            <p>{msg.content}</p>
                            <small>{msg.time}</small>
                        </div>
                    ))}
                </div>

                {/* Message input area */}
                <div className="flex mt-4"> {/* Input area styling */}
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-300 rounded" // Input field styling
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} // Update input value
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Allow sending messages with Enter key
                    />
                    <button
                        className="ml-2 bg-teal-700 text-white p-2 rounded" // Button styling
                        onClick={sendMessage} // Send message on button click
                    >
                        Send
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-teal-700 text-white p-3 text-center"> {/* Footer styling */}
                <p>© 2024 Chat Application</p>
            </footer>
        </div>
    );
};

export default ChatConversation; // Export the ChatConversation component
