import React from 'react'

function PaginationTable({canPreviousPage,canNextPage,pageOptions,pageCount,pageIndex,pageSize,gotoPage,setPageSize,nextPage,previousPage}) {
  return (
    <>
      <div className='p-2 mt-2'>
        <button className={`border p-2 mx-2 rounded ${canPreviousPage && 'hover:bg-slate-100'}`} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
        </button>
        <button className={`border p-2 mx-2 rounded ${canPreviousPage && 'hover:bg-slate-100'}`} onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
        </button>
        <button className={`border p-2 mx-2 rounded ${canNextPage && 'hover:bg-slate-100'}`} onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
        </button>
        <button className={`border p-2 mx-2 rounded ${canNextPage && 'hover:bg-slate-100'}`} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
        </button>
      </div>
      <div className='pb-2'>
        <span>
            Page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
        </span>
      </div>
      <div className='mt-2 mb-4'>
        <span>
            Go to page:{' '}
            <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
                }}
                className='w-16 rounded border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm'
            />
        </span>{' '}
        <select
            value={pageSize} 
            className='rounded border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm'
            onChange={e => {
                setPageSize(Number(e.target.value))
            }}
            >
            {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
                Show {pageSize} rows per page
            </option>
            ))}
        </select>
      </div>
    </>
  )
}

export default PaginationTable