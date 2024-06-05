import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/List'
import Input from './components/Input'
import Title from './components/Title'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="
      flex flex-col items-center
    ">
      <Title />
      <Input />
    </div>
  </React.StrictMode>,
)
