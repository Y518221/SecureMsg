import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Trash2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useMessageStore } from '../../store/messageStore';

const UserProfile = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const clearUserMessages = useMessageStore((state) => state.clearUserMessages);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleClearMessages = () => {
    if (window.confirm('Are you sure you want to delete all your messages? This action cannot be undone.')) {
      clearUserMessages(user!.id);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-500 rounded-full p-3">
          <User className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{user?.username}</h2>
          <p className="text-gray-400 text-sm">Account Settings</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleClearMessages}
          className="w-full flex items-center justify-center px-4 py-2 bg-red-600/20 text-red-500 rounded-md hover:bg-red-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All Messages
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;