import React from 'react'

const Card = () => {
  return (
    <>
    <div className='border p-4 rounded-xl bg-gradient-to-tl  via-neutral-900 from-sky-500  to-slate-600 text-white mx-4'>
       <div className='flex justify-between items-center mb-5'>
            <p className='text-xl font-bold'>VISA</p>
            <p className='font-medium'>account number</p>
       </div>
       <div className='mb-3'>
            <p className='py-2 font-medium'>Balance</p>
            <h2 className='text-3xl font-bold tracking-wide'>$24,274.00<span className='text-[0.7rem]'>(USD)</span></h2>
       </div>
       <div className='flex gap-5'>
        <p className='font-medium'>24/30</p>
        <p className='font-medium'>470</p>
       </div>
    </div>
    </>
  )
}

export default Card