import SearchCity from '@/components/SearchCity'
import Image from 'next/image'
import {FcSearch} from 'react-icons/fc'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen backgroundimage'>
      <div className='p-5 backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 rounded-xl text-center'>
        <div className='shadow-md mb-5 p-4 bg-white rounded-xl'>
            <h1 className='text-2xl font-bold'>EcoHealth 🌎</h1>
        </div>
        <SearchCity ciudad={'arequipa'}/>
      </div>
    </div>
  )
}
