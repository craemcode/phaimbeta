import React, {useMemo} from 'react'
import { router } from "@inertiajs/react";
import { useTable,useBlockLayout, useFlexLayout, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import PaginationTable from "./PaginationTable";


function StockTable({products,stock_id,onAdd}) {
  
  const data = useMemo(()=>products,products)
  const columns = useMemo(()=>[
    {
        Header: 'Product Name',
        width: 150,
        accessor: 'name',
    },
    {
        Header: 'Units',
        width: 100,
        accessor: 'units',
    },
    {
        Header: 'Batch No',
        width: 100,
        accessor: 'batch_number',
    },
    {
        Header: 'Amount Remaining',
        accessor: 'quantity',
        width: 100,
    },
 
    {
        Header: 'Selling Price',
        width: 100,
        accessor: 'selling_price',
    },
], products)

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
        <div className=" bg-white flex flex-col items-center justify-center mx-4 rounded-lg  pt-2 pb-6 shadow relative">
        <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter} />
        <div className='p-2 pb-0  rounded-lg flex flex-col items-center overflow-auto'>
            <table {...getTableProps()} className="justify-self-center table text-sm text-left font-light" >
                <thead>
                    {headerGroups.map(headerGroup=> (
                        <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-blue-600'>
                            {headerGroup.headers.map(column=> (
                                <th {...column.getHeaderProps()} className='px-4 text-green-800 py-2'>
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
                            onClick={()=>onAdd(row.original)} >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} className='px-4 py-2'>
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
);
}
  


export default StockTable