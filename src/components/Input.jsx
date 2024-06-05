import { useState } from 'react'

function Input() {
  return (
    <>
        <form action="" className="
         m-6
        ">
            <input 
                type="text" 
                placeholder="Enter task here"
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