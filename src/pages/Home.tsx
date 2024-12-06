import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Key } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Secure Your Messages with
          <span className="text-blue-500"> SecureMsg</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          End-to-end encryption for your most sensitive communications
        </p>
        <Link
          to="/register"
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get Started
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-lg">
          <Shield className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Military-Grade Encryption</h3>
          <p className="text-gray-300">
            Your messages are protected with AES-256 encryption, ensuring maximum security.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <Lock className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Zero Knowledge</h3>
          <p className="text-gray-300">
            We never store your encryption keys or decrypted messages on our servers.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <Key className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">User Control</h3>
          <p className="text-gray-300">
            Full control over your data with the ability to delete messages at any time.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-300 mb-8">
          Join thousands of users who trust SecureMsg for their sensitive communications.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;