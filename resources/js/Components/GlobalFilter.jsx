import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import SearchBar from './SearchBar'
// Define Custom UI for Global Search Function on Tables

export default function GlobalFilter({preGlobalFilteredRows,globalFilter,setGlobalFilter}) 
{
  const count = preGlobalFilteredRows.length
  const [value,setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value=>{
    setGlobalFilter(value || undefined)
  },50)
  return (
    <span className='m-4'>
        <label htmlFor="GlobalFilter">
          Search:{' '}
        </label>
        <SearchBar
          value={value||""}
          handleChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`...${count} records`}
          name='GlobalFilter'
          isFocused={true} />
    </span>
  )
}