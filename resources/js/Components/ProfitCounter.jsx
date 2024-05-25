import React from 'react'

export default function ProfitCounter({stats}) {
    const total_sales = stats[0]
    const total_restocks = stats[1]

    const gross_profit = total_sales - total_restocks

    const percentage_margin = (gross_profit / total_restocks) * 100

  return (
    <div className='flex justify-center'>
        <div className='bg-white p-5 rounded-md shadow-md flex '>
            <strong className='bg-blue-700 rounded-md p-4 mr-3 text-white'>Profit Counter</strong>
            <br /><br />
            <ul>
                <li>
                    <span className='text-sm'>Sales:</span> Ksh. <strong className='text-lg'>{total_sales.toLocaleString()}</strong>
                </li>
                <li>
                    <span className='text-sm'>Purchases: </span> Ksh. <strong className='text-lg'>{total_restocks.toLocaleString()}</strong>
                </li>
                <li>
                    <span className='text-sm'>Gross Profit: </span> Ksh. <strong className='text-lg'>{gross_profit.toLocaleString()}</strong> <span className='text-sm'>({percentage_margin.toPrecision(4)}%)</span>
                </li>
            </ul>
        </div>

    </div>
  )
}
