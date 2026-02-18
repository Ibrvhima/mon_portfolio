import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Nettoyer les timeouts précédents
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Démarrer après le délai initial
    const startTimeout = setTimeout(() => {
      let currentIndex = 0
      setDisplayText('')

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutRef.current = setTimeout(typeNextChar, 100)
        }
      }

      typeNextChar()
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} break-words`}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.3, repeat: Infinity }}
        className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-current ml-0.5 sm:ml-1"
      />
    </motion.span>
  )
}

export default TypewriterText
