import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/List'
import Input from './components/Input'
import './index.css'

const toDoList = [
  {
    task : "Do homework",
    done : false,
  },
  {
    task : "Grocery Shopping",
    done : false,
  },
  {
    task : "Video games",
    done : true,
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Input />
    <App />
  </React.StrictMode>,
)
