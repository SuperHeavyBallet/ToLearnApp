import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './assets/Card/card.jsx'
import CreateNewCard from './assets/CreateNewCard/createNewCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateNewCard />

  </React.StrictMode>,
)
