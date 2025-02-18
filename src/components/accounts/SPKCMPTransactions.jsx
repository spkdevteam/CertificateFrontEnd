import React, { useEffect, useState } from 'react'
import usePaymentHooks from '../../Hooks/usePaymentModule'
import TransactionTileTile from './TransactionTile'
import TransactionTile from './TransactionTile'
import { tr } from 'framer-motion/client'

function SPKCMPTransactions({ company_id, party_id, fromDate, toDate, transactions }) {


  const [closing, setClosing] = useState(0)

  useEffect(() => {
    setClosing(transactions?.reduce((sum, item) => {
      if (item?.type === 'debit') {
        return sum + item?.amount; // Add amount for Debit transactions
      } else if (item?.type === 'credit') {
        return sum - item?.amount; // Subtract amount for Credit transactions
      }
      return sum; // Return the current sum if the type is neither Debit nor Credit
    }, 0))
  }, [transactions])

  return (
    <div className=" rounded-md text-xs    flex flex-col  items-start  w-full h-full  ">
      <h2 className="h-[5%]   font-bold    text-start w-full ">
        History
      </h2>
      
        <div className='w-full bg-white bg-opacity-5 h-[10%]  '>
          <table className='w-full   '>
            <thead className=''>
              <tr  >
                <th className='text-left text-xs font-medium   px-4 py-2'>Date</th>
                <th className='text-left text-xs font-medium   px-4 py-2'>Description</th>
                <th className='text-right text-xs font-medium   px-4 py-2'>Amount </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='w-full flex   overflow-scroll  h-[90%]  '>
          <table className='w-full h-full flex flex-col justify-start  '>
            <tbody>
              {
                transactions?.map((entry, index) => {

                  return <tr key={index} className='   text-xs  rounded-md border-opacity-20   w-full  '>
                    <TransactionTile entry={entry} />
                  </tr>


                })
              }

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default SPKCMPTransactions
