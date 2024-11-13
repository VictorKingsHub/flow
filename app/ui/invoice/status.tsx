"use client"
import React from 'react'
import clsx from 'clsx'
const StatusInvoice = ({status}: {status: string}) => {
  return (
    <span
    className={clsx(
      'inline-flex items-center rounded-full px-2 py-1 text-sm',
      {
        'bg-blue-500 text-gray-500': status === 'pending',
        'bg-green-500 text-white': status === 'paid',
      },
    )}
  > 
  {status == "pending"? "Pending" : "Paid"}
      </span>
  )
}

export default StatusInvoice
