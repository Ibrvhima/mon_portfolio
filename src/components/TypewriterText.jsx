import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setDisplayText('')
      setCurrentIndex(0)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, delay])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 150)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} break-words`}
    >
      {displayText}
      <motion.span
        animate={{
          opacity: [1, 0],
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-current ml-0.5 sm:ml-1"
      />
    </motion.span>
  )
}

export default TypewriterText
