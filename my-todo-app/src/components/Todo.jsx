import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Todoitem from './Todoitem';

const Todo = () => {
    const data =useRef();
    const [todos , setTodos]=useState([]);

    const addTodos=()=>{
        const inputText =data.current.value.trim();

        if(inputText==""){
            return null;
        }

     const newTodo={
        id: todos.length + 1,
        text:inputText,
        isComplete:false,
     };

     setTodos((prev) => [... prev,newTodo]);

     data.current.value="";
    }

    useEffect(() => {
        console.log(todos);
     },[todos]);

  return (
    <div className='place-self-center bg-white w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-lg'>

        {/* Başlık kısmı */}
        <h1 className='text-3xl font-semibold tracking-wider flex gap-2 items-center'><FaClipboardList /> Todo App </h1>

        {/* Arama Kısmı */}
        <div className='flex items-center bg-[#EEEEEE]  rounded-full'>
            <input
             ref={data} 
             type="text" 
             className='border-none outline-none p-3.5 flex-1 bg-transparent placeholder:text-slate-400' 
             placeholder='Yeni bir görev gir'/>
           <div className='bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer' onClick={() => addTodos()}>
           <FaPlus className='size-6 text-[#EEEEEE]' />
           </div>
        </div>
        
        {/* Listelenen Görevler */}
        <div className='mt-5'>
           {todos.map((todo) => (
                <Todoitem todo={todo}></Todoitem>
            ))}
            
        </div>
    </div>
  )
}

export default Todo