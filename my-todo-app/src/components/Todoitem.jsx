import React from 'react'
import { FaRegCircle,FaRegTrashAlt ,FaRegCheckCircle} from "react-icons/fa";

const Todoitem = ({todo}) => {
  return (
    <div className='w-full  flex items-center px-2 py-4 gap-2 border-b cursor-pointer'>
        <FaRegCircle className='text-[#00ADB5] size-5'/>
        <p className='flex-1'>{todo.text}</p>
        <FaRegTrashAlt className='text-[#b5004e] size-5 hover:scale-110 transition-all'/>
    </div>
  )
}

export default Todoitem