import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import MessageForm from '../components/dashboard/MessageForm';
import MessageList from '../components/dashboard/MessageList';
import UserProfile from '../components/dashboard/UserProfile';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <MessageForm />
          <MessageList />
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;