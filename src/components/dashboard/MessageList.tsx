import React, { useState } from 'react';
import { Key, Trash2, Copy, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useMessageStore } from '../../store/messageStore';

const MessageList = () => {
  const user = useAuthStore((state) => state.user);
  const { messages, decryptMessage, deleteMessage } = useMessageStore();
  const [decryptedMessages, setDecryptedMessages] = useState<Record<string, string>>({});
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const userMessages = messages.filter((m) => m.userId === user?.id);

  const handleDecrypt = (messageId: string) => {
    setError('');
    if (!password) {
      setError('Please enter the decryption password');
      return;
    }

    const decrypted = decryptMessage(messageId, password);
    if (decrypted) {
      setDecryptedMessages((prev) => ({
        ...prev,
        [messageId]: decrypted,
      }));
    } else {
      setError('Failed to decrypt message. Wrong password?');
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const toggleVisibility = (messageId: string) => {
    setDecryptedMessages((prev) => {
      const newState = { ...prev };
      delete newState[messageId];
      return newState;
    });
  };

  if (userMessages.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-400">No encrypted messages yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Key className="h-5 w-5 mr-2 text-blue-500" />
        Your Encrypted Messages
      </h2>

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="decryptPassword" className="block text-sm font-medium text-gray-300 mb-1">
          Decryption Password
        </label>
        <input
          type="password"
          id="decryptPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter decryption password"
        />
      </div>

      <div className="space-y-4">
        {userMessages.map((message) => (
          <div key={message.id} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-400">
                {new Date(message.createdAt).toLocaleString()}
              </span>
              <div className="flex space-x-2">
                {decryptedMessages[message.id] ? (
                  <>
                    <button
                      onClick={() => handleCopy(decryptedMessages[message.id])}
                      className="text-gray-400 hover:text-blue-500"
                      title="Copy decrypted message"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleVisibility(message.id)}
                      className="text-gray-400 hover:text-blue-500"
                      title="Hide decrypted message"
                    >
                      <EyeOff className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleDecrypt(message.id)}
                    className="text-gray-400 hover:text-blue-500"
                    title="Decrypt message"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="text-gray-400 hover:text-red-500"
                  title="Delete message"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="font-mono text-sm break-all">
              {decryptedMessages[message.id] ? (
                <div className="text-green-400">{decryptedMessages[message.id]}</div>
              ) : (
                <div className="text-gray-400">{message.encryptedData.ciphertext}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;