import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import App from './App.jsx'
import { LoadingScreen } from './components/LoadingScreen'

const LOADER_KEY = 'sj-loader-dismissed'

function Root() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem(LOADER_KEY)
  })

  useEffect(() => {
    if (!isLoading) return undefined

    const timer = setTimeout(() => {
      window.sessionStorage.setItem(LOADER_KEY, 'true')
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && <App />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
