import { useState } from 'react'
import Item from '../components/Item'

function List() {
  return (
    <div className="ToDo">
      <h1>To Do List:</h1>
      <ul>
        <Item 
          task={{
            content: "Do homework",
            done: false,
          }}
        />
        <Item 
          task={{
            content: "Grocery shopping",
            done: false,
          }}
        />
        <Item 
          task={{
            content: "Video games",
            done: true,
          }}
        />
      </ul>
    </div>
  )
}

export default List