import { useState } from 'react'

function Item({ task }) {
  return (
    <>
    <li>
        {task.content}
        {task.done ? "✔️" : null }
    </li>
    </>
  )
}

export default Item