import React, { useState } from 'react'

export default function ShoppingList() {
  const [items, setItems] = useState<string[]>([])

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Shopping List</h2>
      <ul className="list-disc pl-6">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}