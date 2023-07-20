import React, { useEffect, useRef } from 'react'

function SearchBar({name,value,handleChange,placeholder, isFocused}) {
  
  const input = useRef()
  useEffect(()=>{
    if (isFocused){
        input.current.focus()
    }
  }, [])
  
  
  
  
  
  
  
    return (
    <div className="flex items-center">
    <div className="flex border border-blue-500 rounded">
        <input
            type="text"
            name={name}
            value={value}
            ref={input}
            className="block w-full px-4 py-2 text-black-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
        />
       
    </div>
</div>
);
  
}

export default SearchBar
