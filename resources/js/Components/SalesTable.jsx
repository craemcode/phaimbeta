import React, {useMemo} from 'react'
import { router } from "@inertiajs/react";
import { useTable,useBlockLayout, useFlexLayout, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import PaginationTable from "./PaginationTable";

export default function SalesTable({sales,stock_id}) {
    const data = useMemo(()=>sales,sales)
    
    
    //format the dates
    sales.forEach((sale)=>(
         sale.created_at = new Date(sale.created_at).toDateString()
         
    ))
    
    
    
    
    
    
    const columns = useMemo(()=>[
      {
          Header: 'Sale ID',
          accessor: 'id',
      },
         
      {
          Header: 'Date of Sale',
          accessor: 'created_at',
      },
  ], sales)
  
  //things stolen from ken
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state:{pageIndex,pageSize,globalFilter},
      preGlobalFilteredRows,
      setGlobalFilter,
  } =useTable({columns,data},useGlobalFilter,usePagination,useBlockLayout);
  
  
  
  
  
  
  
  
    return (
    <div className="mx-auto bg-white flex flex-col items-center justify-center p-12  pt-2 relative">
    <GlobalFilter
    preGlobalFilteredRows={preGlobalFilteredRows}
    globalFilter={globalFilter}
    setGlobalFilter={setGlobalFilter} />
    <div className='p-6 pb-0 border border-blue-600 rounded-lg flex flex-col items-center w-fit'>
        <table {...getTableProps()} className="justify-self-center mx-auto table text-sm text-left font-light" >
            <thead>
                {headerGroups.map(headerGroup=> (
                    <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-blue-600'>
                        {headerGroup.headers.map(column=> (
                            <th {...column.getHeaderProps()} className='px-6 text-green-800 py-2'>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row)=> {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}
                        className='border-b transition duration-300 ease-in-out hover:bg-neutral-100 hover:cursor-pointer'
                        onClick={()=>{router.get(route('sale.show', [stock_id,row.original.id]))}} >
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className='px-3 py-4'>
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr> 
                    )
                })}
            </tbody>
        </table>
        <PaginationTable
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageOptions={pageOptions}
        setPageSize={setPageSize} />
    </div>
</div>
  )
}
