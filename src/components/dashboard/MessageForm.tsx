import React, { useState } from 'react';
import { Lock, Send } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useMessageStore } from '../../store/messageStore';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const user = useAuthStore((state) => state.user);
  const addMessage = useMessageStore((state) => state.addMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!message || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      addMessage(user!.id, message, password);
      setMessage('');
      setPassword('');
    } catch (err) {
      setError('Failed to encrypt message');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Lock className="h-5 w-5 mr-2 text-blue-500" />
        Encrypt New Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Enter your message"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Encryption Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter encryption password"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Send className="h-4 w-4 mr-2" />
          Encrypt & Save
        </button>
      </form>
    </div>
  );
};

export default MessageForm;