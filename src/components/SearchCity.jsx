import React from 'react'
import { FcSearch } from 'react-icons/fc'
import SelectCity from './SelectCity'

export default function SearchCity({
    city
}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <SelectCity city={city}/>
    </div>
  )
}
