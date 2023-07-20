import React, {useMemo} from 'react'
import { router } from "@inertiajs/react";
import { useTable,useBlockLayout, useFlexLayout, useGlobalFilter, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";
import PaginationTable from "./PaginationTable";


function StockTable({products,stock_id}) {
  
  const data = useMemo(()=>products,products)
  const columns = useMemo(()=>[
    {
        Header: 'Product Name',
        accessor: 'name',
    },
    {
        Header: 'Units',
        accessor: 'units',
    },
    {
        Header: 'Amount Remaining',
        accessor: 'amount',
    },
 
    {
        Header: 'Selling Price',
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
        <div className="mx-auto bg-white flex flex-col items-center justify-center p-12  pt-2 relative">
        <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter} />
        <div className='p-6 pb-0 border border-slate-400 rounded-lg flex flex-col items-center w-fit'>
            <table {...getTableProps()} className="justify-self-center mx-auto table text-sm text-left font-light" >
                <thead>
                    {headerGroups.map(headerGroup=> (
                        <tr {...headerGroup.getHeaderGroupProps()} className='border-b border-slate-400'>
                            {headerGroup.headers.map(column=> (
                                <th {...column.getHeaderProps()} className='px-6 py-2'>
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
                            onClick={()=>router.get(route('product.show',[row.original.id]))} >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} className='px-6 py-4'>
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