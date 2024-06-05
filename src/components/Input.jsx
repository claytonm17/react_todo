import { useState } from 'react'

function Input() {
  return (
    <>
        <form action="">
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