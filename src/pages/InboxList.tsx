import React from 'react';

// Define the structure of a conversation
interface Conversation {
    user: string;         // User's name
    lastMessage: string;  // The last message in the conversation
    time: string;         // The time the last message was sent
}

// Define the props for the InboxList component
interface InboxListProps {
    conversations: Conversation[]; // Array of conversations
}

// InboxList functional component
const InboxList: React.FC<InboxListProps> = ({ conversations }) => {
    // If there are no conversations, display a message
    if (conversations.length === 0) {
        return <div className="text-center text-gray-500 py-10">No conversations available.</div>; // Empty inbox message
    }

    return (
        <div className="flex flex-col gap-4 p-4"> {/* Inbox List Container */}
            {conversations.map((conversation, index) => (
                <div
                    key={index} // Unique key for each conversation
                    className="bg-white border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-100 transition duration-300" // Tailwind CSS for styling the conversation item
                >
                    <strong className="block text-gray-800 text-lg">{conversation.user}:</strong> {/* User name */}
                    <p className="text-gray-600 my-2">{conversation.lastMessage}</p> {/* Last message */}
                    <small className="text-gray-400 text-sm">{conversation.time}</small> {/* Time of the last message */}
                </div>
            ))}
        </div>
    );
};

export default InboxList; // Export the InboxList component
