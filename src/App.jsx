import React from 'react'
import DevOpsList from './components/DevOpsList'

export default function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Learning DevOps'

  return (
    <div className="app">
      <h1>{appTitle}</h1>
      <p>Welcome to your new React project.</p>
      <DevOpsList />
    </div>
  )
}
