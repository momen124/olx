import React from 'react';

// Chat Page Component
const ChatPage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen"> {/* Basic styling for the body */}
            {/* Navbar section */}
            <div className="bg-gray-800 text-white p-3 text-center"> {/* Navbar styling */}
                Navbar
            </div>

            {/* Inbox list section */}
            <div className="flex-grow p-5 border border-gray-300 overflow-y-auto"> {/* Inbox list styling */}
                {/* Example of chat conversations */}
                <div className="p-4 mb-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"> {/* Individual conversation item */}
                    <strong>User 1:</strong> Last message from User 1
                </div>
                <div className="p-4 mb-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"> {/* Individual conversation item */}
                    <strong>User 2:</strong> Last message from User 2
                </div>
                <div className="p-4 mb-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100"> {/* Individual conversation item */}
                    <strong>User 3:</strong> Last message from User 3
                </div>
                {/* More conversations can go here */}
            </div>

            {/* Footer section */}
            <footer className="bg-gray-800 text-white p-3 text-center"> {/* Footer styling */}
                Footer
            </footer>
        </div>
    );
};

export default ChatPage; // Export the ChatPage component
