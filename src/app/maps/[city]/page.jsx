'use client'

import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {IoIosReorder} from 'react-icons/io'
import Stats from '@/components/Stats'
import SelectCity from '@/components/SelectCity'
import data from '@/utils/data'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function page({params}) {
    const router = useRouter()
    const handleBack = () => {
        router.push('/')
    }
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
        <button className='bg-gray-100 rounded-lg p-2 shadow-md' onClick={handleBack}>
            <span className='text-md'>BACK ◀</span>
        </button>
        <div className='border-t border-t-gray-100 border w-full m-3'></div>
        <Stats data={cityData} />
    </div>
</div>
  )
}
