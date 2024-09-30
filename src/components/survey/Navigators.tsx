import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


type Props = {}

const Navigators = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto ~px-4/12 pb-4 pt-30">
        <div className='flex text-white items-center gap-2'>
            <button className='bg-gray-400 p-4 rounded-lg'>
                <FaArrowLeft/>
            </button>
            <button className='bg-customRed p-4 rounded-lg'>
                <FaArrowRight/>
            </button>
        </div>
    </div>
  )
}


export default Navigators