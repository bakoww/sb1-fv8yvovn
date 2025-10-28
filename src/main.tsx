import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// inject favicon when no index.html is edited
const link = document.createElement('link')
link.rel = 'icon'
link.type = 'image/svg+xml'
link.href = './public/favicon.svg' // ou '/sb1-fv8yvovn/favicon.svg' si base non '/'
document.head.appendChild(link)

// set page title
document.title = 'Mathis Dupont--Korpys Portfolio'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
