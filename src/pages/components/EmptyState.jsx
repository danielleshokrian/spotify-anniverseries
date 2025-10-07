import React from 'react';
import { Calendar } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center shadow-xl">
      <Calendar className="w-16 h-16 text-purple-300 mx-auto mb-4" />
      <p className="text-xl text-white">No albums found matching these anniversary criteria</p>
      <p className="text-purple-200 mt-2">Try adjusting the target year or increment</p>
    </div>
  );
}