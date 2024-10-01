import React from 'react';

// Chat Page Component
const ChatPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-teal-100"> {/* Main page container */}
            {/* Navbar section */}
            <div className="bg-teal-700 text-white p-4 text-center text-2xl font-bold shadow-md"> {/* Navbar */}
                Chat Page
            </div>

            {/* Main chat container, centered vertically and horizontally */}
            <div className="flex-grow flex justify-center items-center p-5 bg-teal-50"> {/* Chat container */}
                <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-teal-200 overflow-y-auto"> {/* Inbox list */}
                    {/* Example conversation items */}
                    <div className="p-4 mb-4 bg-white rounded-lg border border-teal-100 cursor-pointer transition-colors duration-300 hover:bg-teal-200 hover:scale-105"> {/* Conversation item */}
                        <strong className="text-teal-800 text-lg">John Doe</strong> {/* Name */}
                        <p className="text-teal-700 mt-1 text-sm">Is the item still available?</p> {/* Message preview */}
                        <small className="text-teal-800 text-xs">2 mins ago</small> {/* Timestamp */}
                    </div>
                    <div className="p-4 mb-4 bg-white rounded-lg border border-teal-100 cursor-pointer transition-colors duration-300 hover:bg-teal-200 hover:scale-105"> {/* Conversation item */}
                        <strong className="text-teal-800 text-lg">Jane Smith</strong> {/* Name */}
                        <p className="text-teal-700 mt-1 text-sm">I'll pick it up tomorrow!</p> {/* Message preview */}
                        <small className="text-teal-800 text-xs">1 hour ago</small> {/* Timestamp */}
                    </div>
                    <div className="p-4 mb-4 bg-white rounded-lg border border-teal-100 cursor-pointer transition-colors duration-300 hover:bg-teal-200 hover:scale-105"> {/* Conversation item */}
                        <strong className="text-teal-800 text-lg">Mark Wilson</strong> {/* Name */}
                        <p className="text-teal-700 mt-1 text-sm">Can you deliver?</p> {/* Message preview */}
                        <small className="text-teal-800 text-xs">3 hours ago</small> {/* Timestamp */}
                    </div>
                </div>
            </div>

            {/* Footer section fixed at the bottom of the page */}
            <footer className="bg-teal-700 text-white p-2 text-center text-sm shadow-md"> {/* Footer */}
                © 2024 Chat Application
            </footer>
        </div>
    );
};

export default ChatPage; // Export the ChatPage component
