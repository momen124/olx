import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Conversation {
  id: string;
  name: string;
  message: string;
  avatar: string;
}

const ChatList: React.FC<{ onSelectConversation: (id: string) => void }> = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    // Fetch conversations from the backend
    axios.get('/api/conversations')
  .then((response: { data: Conversation[] }) => setConversations(response.data))
  .catch((error: any) => console.error('Error fetching conversations:', error));
  }, []);

  return (
    <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <input type="text" placeholder="Search conversations" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <ul>
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectConversation(conv.id)}
          >
            <div className="flex items-center p-4">
              <img src={conv.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="font-semibold">{conv.name}</h3>
                <p className="text-sm text-gray-600">{conv.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
