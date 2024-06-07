import { useState } from 'react'

function Input() {
  return (
    <>
        <form action="" className="
         m-6 flex
        ">
            <input 
                type="text" 
                placeholder="Enter task here"
                className="
                bg-slate-300 p-2
                  rounded-tl-lg
                "
            />
            <input 
                type="submit" 
                value="Add"
            />
        </form>
    </>
  )
}

export default Input