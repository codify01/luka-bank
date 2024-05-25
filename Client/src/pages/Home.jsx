import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Action from '../components/Action'
import Transaction from '../components/Transaction'

const Home = () => {
  return (
    <>
        
        <div className='flex justify-between p-4'>
            <h1 className='text-xl font-semibold'>My Card</h1>
            <button className='bg-neutral-800 px-3 rounded-2xl'>Add +</button>
        </div>
        <Card/>
        <Action/>
        <Transaction/>
    </>
  )
}

export default Home