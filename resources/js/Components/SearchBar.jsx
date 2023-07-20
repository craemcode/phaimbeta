import React from 'react'

function SearchBar() {
  return (
    <div className="flex items-center">
    <div className="flex border border-blue-500 rounded">
        <input
            type="text"
            className="block w-full px-4 py-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
        />
        <button className="px-4 text-white bg-blue-900 border-l rounded ">
            Search
        </button>
    </div>
</div>
);
  
}

export default SearchBar
