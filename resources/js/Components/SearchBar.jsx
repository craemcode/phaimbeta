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
        <input
            type="text"
            name={name}
            value={value}
            ref={input}
            className="px-4  text-black-700  bg-inherit h-8 focus:border border-0 bg-slate-200 rounded-md focus:border-blue-400 focus:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-opacity-40"
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
        />
       
</div>
);
  
}

export default SearchBar
