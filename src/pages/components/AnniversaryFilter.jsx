import React from 'react';
import { Filter, Disc } from 'lucide-react';

export default function AnniversaryFilter({
  filterEnabled,
  setFilterEnabled,
  targetYear,
  setTargetYear,
  increment,
  setIncrement
}) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-pink-500/30 rounded-2xl p-6 mb-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Disc className="w-6 h-6 text-pink-500" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Anniversary Filter
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterEnabled(!filterEnabled)}
            className={`relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-300 border-2 ${
              filterEnabled 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-400 shadow-lg shadow-pink-500/50' 
                : 'bg-gray-800 border-gray-700'
            }`}
          >
            <span
              className={`inline-block h-7 w-7 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                filterEnabled ? 'translate-x-11' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="text-white font-medium">
            {filterEnabled ? '🎵 Filter Active' : '📀 Show All Albums'}
          </span>
        </div>

        {/* Target Year */}
        <div>
          <label className="block text-cyan-400 mb-2 text-sm font-bold uppercase tracking-wide">
            Target Year
          </label>
          <input
            type="number"
            value={targetYear}
            onChange={(e) => setTargetYear(parseInt(e.target.value))}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-900 text-white border-2 border-pink-500/30 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all font-mono"
            disabled={!filterEnabled}
          />
        </div>

        {/* Increment */}
        <div>
          <label className="block text-cyan-400 mb-2 text-sm font-bold uppercase tracking-wide">
            Anniversary Increment
          </label>
          <select
            value={increment}
            onChange={(e) => setIncrement(parseInt(e.target.value))}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-900 text-white border-2 border-pink-500/30 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all font-mono cursor-pointer"
            disabled={!filterEnabled}
          >
            <option value={5}>Every 5 years</option>
            <option value={10}>Every 10 years</option>
            <option value={15}>Every 15 years</option>
            <option value={20}>Every 20 years</option>
            <option value={25}>Every 25 years</option>
          </select>
        </div>
      </div>
    </div>
  );
}