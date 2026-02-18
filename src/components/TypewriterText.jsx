import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true)
      setDisplayText('')
      
      let index = 0
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeInterval)
        }
      }, 100)

      return () => clearInterval(typeInterval)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [text, delay])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} break-words`}
    >
      {displayText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-current ml-0.5 sm:ml-1"
        />
      )}
    </motion.span>
  )
}

export default TypewriterText
