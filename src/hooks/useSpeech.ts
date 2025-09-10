import React from 'react'

export function useSpeech(onResult: (text: string) => void) {
  const recRef = React.useRef<SpeechRecognition | null>(null)

  React.useEffect(() => {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    if (!SR) return
    const rec = new SR()
    rec.lang = 'en-IN'
    rec.interimResults = false
    rec.onresult = (e: any) => onResult(e.results[0][0].transcript)
    recRef.current = rec
  }, [onResult])

  return {
    listen: () => recRef.current?.start(),
    stop: () => recRef.current?.stop(),
    supported: !!((window as any).webkitSpeechRecognition || (window as any).SpeechRecognition)
  }
}