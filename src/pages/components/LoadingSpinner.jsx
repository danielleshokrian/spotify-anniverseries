import React from 'react';

export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
      <p className="text-white text-xl">{message}</p>
    </div>
  );
}