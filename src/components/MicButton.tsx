import React from 'react'
import { useSpeech } from '../hooks/useSpeech'

export default function MicButton() {
  const { listen, stop, supported } = useSpeech(text => {
    console.log("Heard:", text)
  })

  if (!supported) return <p>Your browser does not support Speech Recognition.</p>

  return (
    <button
      onClick={listen}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    >
      🎤 Start Listening
    </button>
  )
}