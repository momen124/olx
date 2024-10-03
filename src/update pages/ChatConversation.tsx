import React, { useState, useRef } from 'react';

// ChatConversation Component
const ChatConversation: React.FC = () => {
    const [messages, setMessages] = useState<{ content: string; type: 'sent' | 'received' }[]>([
        { content: 'Hello, how can I help you?', type: 'sent' },
        { content: "I'm interested in buying your product.", type: 'received' },
    ]);

    const [inputValue, setInputValue] = useState('');
    const chatBoxRef = useRef<HTMLDivElement>(null); // Reference to the chat box for scrolling

    // Function to send a message
    const sendMessage = () => {
        if (inputValue.trim() !== '') { // Check if input is not empty
            const newMessage: { content: string; type: 'sent' | 'received' } = { // Explicitly define the type here
                content: inputValue,
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
        <div className="flex flex-col h-screen"> {/* Main container with full height */}
            {/* Navbar */}
            <div className="bg-gray-800 text-white p-4 text-center"> {/* Navbar styling */}
                Navbar
            </div>

            {/* Chat box for displaying messages */}
            <div ref={chatBoxRef} className="flex-grow p-4 border border-gray-300 overflow-y-auto"> {/* Chat box styling */}
                {/* Render chat messages */}
                {messages.map((msg, index) => (
                    <div key={index} className={`message p-2 my-2 rounded ${msg.type === 'sent' ? 'bg-green-200 self-end' : 'bg-gray-200 self-start'}`}>
                        {msg.content}
                    </div>
                ))}
            </div>

            {/* Message input section */}
            <div className="flex p-2 border-t border-gray-300 bg-gray-100"> {/* Input area styling */}
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-grow p-2 border border-gray-300 rounded" // Input field styling
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Update input value
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Allow sending messages with Enter key
                />
                <button
                    className="ml-2 bg-gray-800 text-white p-2 rounded" // Button styling
                    onClick={sendMessage} // Send message on button click
                >
                    Send
                </button>
            </div>

            {/* Footer section */}
            <footer className="bg-gray-800 text-white text-center p-3"> {/* Footer styling */}
                Footer
            </footer>
        </div>
    );
};

export default ChatConversation; // Export the ChatConversation component
