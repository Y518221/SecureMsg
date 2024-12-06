import React from 'react';
import { Shield, Lock, Key, RefreshCw } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About SecureMsg</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          SecureMsg is a state-of-the-art message encryption platform designed to provide
          secure communication while maintaining simplicity and ease of use.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            We believe in a world where private communication remains private. Our mission
            is to provide military-grade encryption technology that's accessible to everyone,
            ensuring your messages stay secure and confidential.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Security First</h3>
                <p className="text-gray-300">
                  Every feature we build starts with security in mind, ensuring your data
                  remains protected at all times.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Privacy Focused</h3>
                <p className="text-gray-300">
                  We never store decrypted messages or encryption keys, ensuring your
                  privacy is maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">1. Message Encryption</h3>
              <p className="text-gray-300">
                Your message is encrypted using AES-256 encryption with a unique key
                derived from your password.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2. Secure Storage</h3>
              <p className="text-gray-300">
                Encrypted messages are stored securely, and only you have the key to
                decrypt them.
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">3. Easy Decryption</h3>
              <p className="text-gray-300">
                Decrypt your messages anytime using your password, with the option to
                delete them permanently.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          We use industry-standard encryption algorithms and security practices to ensure
          your messages remain secure and private.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Key className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">AES-256 Encryption</h3>
            <p className="text-gray-300">
              Military-grade encryption algorithm for maximum security.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <RefreshCw className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Secure Key Derivation</h3>
            <p className="text-gray-300">
              PBKDF2 with multiple iterations for secure key generation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Lock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Zero Knowledge</h3>
            <p className="text-gray-300">
              We never see or store your decrypted messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;