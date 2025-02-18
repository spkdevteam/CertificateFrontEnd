import React, { useEffect } from 'react'

function TransactionTile({ entry }) {
  useEffect((entry) => {
    console.log(entry)
  }, [entry])
  return (
    <>
      <td className='text-nowrap  px-3 py-3'>{entry?.date?.split('T')[0].split('-')?.reverse().join('-')}</td>
      <td className='  px-3 py-3'>{entry?.invoice?.length 
  ? entry.invoice
      .filter((inv) => inv.amount)
      .map((inv) => {
        const action =
          entry?.type === 'credit' ? 'Invoice Created' :
          entry?.type === 'debit' ? 'Invoice Payment' :
          '';

        return [
          action,
          inv?.displayId?.slice(-14), // Extracts last 14 characters
          parseFloat(inv?.amount)?.toFixed(2)
        ].join(': ');
      })
      .join(' | ')
  : ''}</td>
      <td className='text-right   px-2 py-1'>{entry?.type == 'credit' ? '-' : ''}{parseFloat(entry?.amount)?.toFixed(2)}</td>
    </>
  )
}

export default TransactionTile
