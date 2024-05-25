import React from 'react'

const Transaction = () => {
  let date = new Date()
  let myDate = {day:'numeric', month:'long', year:'numeric'}
  let  formattedDate = date.toLocaleDateString("en-US",myDate)
  return (
    <>
        <div className='bg-neutral-800 px-5 pb-5  rounded-t-3xl fixed w-full bottom-14 max-h-[45%] overflow-y-auto max-w-md'>
            
           <div className='sticky top-0 bg-neutral-800 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>

            <div className='flex justify-between items-center w-full'>
              <p className='text-2xl font-semibold'>Last Transaction</p>
              <p>Veiw all</p>
            </div>
           </div>
           {/* <div className='flex justify-between items-center s'>
            <p className='text-2xl font-semibold'>Last Transaction</p>
            <p>Veiw all</p>
           </div> */}
            <div>
              <div className=' bg-neutral-700 p-3 rounded-lg flex justify-between items-center mb-2'>
              <div className='flex items-center gap-5'>
                <div>
                  <button className='mt-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                  </button>
                </div>
                <div>
                  <h1 className='text-xl font-medium sentence'>where money is going</h1>
                  <p>
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div>
                  <p>-300</p>
                </div>
              </div>
            </div>
        
       
           
        </div>
    </>
  )
}

export default Transaction