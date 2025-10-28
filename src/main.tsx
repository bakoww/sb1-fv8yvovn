import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// inject favicon when no index.html is edited
const link = document.createElement('link')
link.rel = 'icon'
link.type = 'image/svg+xml'
link.href = '/favicon.svg'
document.head.appendChild(link)

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
