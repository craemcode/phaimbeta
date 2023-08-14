import SalesTable from '@/Components/SalesTable'
import React from 'react'

export default function Sales(props) {
    const sales = props.sales
    const stock = props.stock
  return (
    <SalesTable sales={sales} stock_id={stock.id}/>
  )
}
//remeber to have the sales object reflect this....