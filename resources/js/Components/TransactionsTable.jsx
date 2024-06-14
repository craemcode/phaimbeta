import React, {useMemo} from 'react'
import { router } from "@inertiajs/react";
import { useTable,useBlockLayout, useFlexLayout, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import PaginationTable from "./PaginationTable";

export default function TransactionsTable({transactions,stock_id,link}) {
    const data = useMemo(()=>transactions,transactions)
   
    
    //format the dates
    transactions.forEach((transaction)=>{
        const sell_date = new Date(transaction.created_at)
        transaction.created_at = sell_date.toDateString()+" - "+sell_date.toLocaleTimeString()
        })
    
    
    
    
    const columns = useMemo(()=>[
      {
          Header: 'Transaction',
          accessor: 'id',
          width: 80
      },
         
      {
          Header: 'Date of Transaction',
          accessor: 'created_at',
          width: 220
      },
  ], transactions)
  
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
    <div className="mx-auto bg-white flex flex-col items-center justify-center m-2 shadow-md rounded-lg relative">
    <GlobalFilter
    preGlobalFilteredRows={preGlobalFilteredRows}
    globalFilter={globalFilter}
    setGlobalFilter={setGlobalFilter} />
    <div className='p-2 pb-0 rounded-lg flex flex-col items-center w-fit'>
        <table {...getTableProps()} className="justify-self-center mx-auto table text-sm text-left font-light" >
            <thead>
                {headerGroups.map(headerGroup=> (
                    <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-blue-600'>
                        {headerGroup.headers.map(column=> (
                            <th {...column.getHeaderProps()} className='px-2 text-green-800 py-2'>
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
                        onClick={()=>{router.get(route(link, [stock_id,row.original.id]))}} >
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className='px-2 py-2'>
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
