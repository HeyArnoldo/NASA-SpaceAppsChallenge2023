import React from 'react'
import {GrContact} from 'react-icons/gr'

export default function Stats({
    data
}) {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-2 h-5/6 mx-auto w-full mb-4  ">
                    <div className="shadow row-span-1 col-span-1 p-2 rounded-lg justify-between flex items-center">
                        <span className="">🌡️ Temp</span>
                        <span className="text-xl bg-yellow-200 p-1 rounded-lg">{data.temperature.now}</span>
                    </div>
                    <div className="shadow items-center flex justify-between p-2">
                        <span>💧 Humedity</span>
                        <span className=' bg-blue-100 p-1 rounded-lg'>{data.temperature.humidity}</span>
                    </div>
                    <div className="shadow items-center flex justify-between p-2">
                        <span>🌡️🔥 Max</span>
                        <span className='bg-orange-200 p-1 rounded-lg'>{data.temperature.max}</span>
                    </div>
                    <div className="shadow items-center flex justify-between p-2">
                        <span>🌡️🧊 Min</span>
                        <span className='bg-blue-900 p-1 rounded-lg text-white'>{data.temperature.min}</span>
                    </div>
        </div>
        <div className='p-3'>
            <div className='mb-4'>
                <h2 className='text-xl mb-2'>
                    <span className='inline-block mr-2'>✅</span>
                    <span className='font-bold'>Recomendations:</span>
                </h2>
                <div className='grid grid-cols-2 gap-2 mx-auto w-full'>
                    {data.recomendations.map((item, index) => (
                        <div className='bg-gray-100 rounded-md p-1' key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h2 className='text-xl mb-2'>
                    <span className='inline-block mr-2'>⛔</span>
                    <span className='font-bold'>Risks:</span>
                </h2>
                {
                    data.conditions.map((item, index) => (
                        <div className='mb-4'>
                    <div className='bg-red-100 px-1 uppercase font-semibold text-center mb-2 rounded-lg'>
                            {item.risk} 
                    </div>
                    <div className='grid grid-cols-2 gap-2 mx-auto w-full'>
                        {item.recomendations.map((item, index) => (
                            <div className='bg-gray-100 rounded-md p-1' key={index}>{item}</div>
                        ))}
                    </div>
                </div>
                    ))
                }
            </div>
            <div className='shadow-lg p-2 text-center bg-slate-100 rounded-lg'>
                <h3 className='text-xl mb-2 font-semibold'>
                    Need special care?
                </h3>
                <button className='bg-blue-500 text-white rounded-lg px-2 py-1'>Contact a Professional <GrContact className='inline-block text-2xl '/></button>
            </div>
        </div>
    </div>
  )
}
