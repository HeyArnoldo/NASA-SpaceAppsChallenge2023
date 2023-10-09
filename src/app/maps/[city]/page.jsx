'use client'

import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {IoIosReorder} from 'react-icons/io'
import Stats from '@/components/Stats'
import SelectCity from '@/components/SelectCity'
import data from '@/utils/data'
export default function page({params}) {
    const city = params.city
    const cityData = data.filter((item) => item.city === city)[0]
  return (
    <div className='flex flex-col justify-center items-center  bg-gray-500'>
    <div className='shadow-md my-3 p-1 absolute top-1 bg-white rounded-xl z-10 flex'>
        <SelectCity ciudad={city}/>
    </div>
    <placeholder className='w-full h-96'>
      

    </placeholder>
    <div className='flex flex-col justify-center items-center bg-white rounded-t-3xl p-3 w-full'>
        <IoIosReorder className='text-3xl' />
        <div className='border-t border-t-gray-100 border w-full m-3'></div>
        <Stats data={cityData} />
    </div>
</div>
  )
}
