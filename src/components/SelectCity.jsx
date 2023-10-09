'use client';
import React from 'react'
import { Redirect } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function SelectCity({
    ciudad
}) {
  const router = useRouter();
  if (!ciudad) ciudad = 'lima'
  const [city, setCity] = useState(ciudad)
  const handleChange = (e) => {
    setCity(e.target.value)
  }
  const handleClick = () => {
    return router.push(`/maps/${city}`)
  }
  return (
    <div className='flex flex-row items-center justify-center'>
      <select className="form-select model-select p-4 px-10 font-semibold text-xl rounded-t-xl" id="model" onChange={handleChange} value={city}>
            <option value="lima">🌆 Lima</option>
            <option value="cusco">🏞️ Cusco</option>
            <option value="arequipa">🏔️ Arequipa</option>
            <option value="iquitos">🌳 Iquitos</option>
            <option value="chiclayo">🌅 Chiclayo</option>
      </select>
      <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-r-lg shadow-md inline-block" onClick={handleClick} type="button">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  )
}
