import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border-[40px] border-gray-800"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-[40px] border-gray-800"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}