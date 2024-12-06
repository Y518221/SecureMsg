import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Home as HomeIcon, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; // TODO: Replace with actual auth state

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">SecureMsg</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-400">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-red-400 hover:text-red-300"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;