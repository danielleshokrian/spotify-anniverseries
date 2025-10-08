import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">

        <div className="flex justify-center mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
          <div className="relative bg-black border-4 border-pink-500 p-8 rounded-full shadow-2xl">
            <AlertCircle className="w-24 h-24 text-pink-500" />
          </div>
        </div>

        <h1 className="text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        
        <h2 className="text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-400 mb-8">
          Looks like this track got lost in the vinyl collection...
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-pink-500/50 hover:scale-105"
          >
            <Home className="w-6 h-6" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}