import React from 'react';
import { Filter } from 'lucide-react';

export default function AnniversaryFilter({
  filterEnabled,
  setFilterEnabled,
  targetYear,
  setTargetYear,
  increment,
  setIncrement
}) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-bold text-white">Anniversary Filter</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterEnabled(!filterEnabled)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
              filterEnabled ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                filterEnabled ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="text-white font-medium">
            {filterEnabled ? 'Filter Active' : 'Show All Albums'}
          </span>
        </div>

        {/* Target Year */}
        <div>
          <label className="block text-purple-200 mb-2 text-sm">Target Year</label>
          <input
            type="number"
            value={targetYear}
            onChange={(e) => setTargetYear(parseInt(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            disabled={!filterEnabled}
          />
        </div>

        {/* Increment */}
        <div>
          <label className="block text-purple-200 mb-2 text-sm">Anniversary Increment</label>
          <select
            value={increment}
            onChange={(e) => setIncrement(parseInt(e.target.value))}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
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