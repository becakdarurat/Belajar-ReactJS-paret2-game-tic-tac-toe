import React from 'react'
import ReactDOM from 'react-dom/client'
// gk usah khwatir walaupun nama componentnya kita buat board, tetap yang di compile nama filenya
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
