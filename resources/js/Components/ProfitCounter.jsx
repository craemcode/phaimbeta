import React from 'react'

export default function ProfitCounter({stats}) {
    const total_sales = stats[0]
    const total_restocks = stats[1]

    const gross_profit = total_sales - total_restocks

    const percentage_margin = (gross_profit / total_restocks) * 100

  return (
    <div className='flex justify-center'>
        <div className='bg-white p-5 rounded-md shadow-md flex '>
            <strong className='bg-gray-100 rounded-md p-4 mr-3 shadow-md'>
                Profit Counter 
                <img src="/img/money.svg" alt="text" />
            </strong>
            <ul>
                <li>
                    <span className='text-sm text-gray-600'>Sales</span> <br /> <strong className='text-lg'>{total_sales.toLocaleString()}</strong>
                </li>
                <li>
                    <span className='text-sm text-gray-600'>Purchases </span> <br /> <strong className='text-lg'>{total_restocks.toLocaleString()}</strong>
                </li>
                <li>
                    <span className='text-sm text-gray-600'>Gross Profit </span> <br /> <strong className='text-lg'>{gross_profit.toLocaleString()}</strong> (<span className={percentage_margin >= 0 ? 'text-sm text-green-500':'text-sm text-red-500'}>{percentage_margin.toPrecision(4)}%</span>)
                </li>
            </ul>
        </div>
 
    </div>
  )
}
