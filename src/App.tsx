import React from 'react'
import MicButton from './components/MicButton'
import ShoppingList from './components/ShoppingList'
import Suggestions from './components/Suggestions'

function App() {
  return (
    <div className="min-h-screen p-4 bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">🛒 Voice Shopping Assistant</h1>
      <MicButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ShoppingList />
        <Suggestions />
      </div>
    </div>
  )
}

export default App