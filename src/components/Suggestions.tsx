import React from 'react'

export default function Suggestions() {
  const suggestions = ["Milk", "Bread", "Apples"]
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
      <ul className="list-disc pl-6">
        {suggestions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  )
}