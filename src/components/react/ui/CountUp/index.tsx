import { useRef, useState, type FC, useEffect } from 'react'

interface props {
  children?: React.ReactNode
  end: number
  start: number
}

/**
 * CountUp Component
 *
 * @param {number} end - The target value to count up to
 * @returns {number} - The current count value
 */
const CountUp: FC<props> = ({ end, start = 0 }) => {
  const [count, setCount] = useState(0) // Initialize count state to 0
  const ref = useRef(start) // Initialize ref value to 0
  const acomulator = end / 200 // Calculate the increment value

  /**
   * Updates the counter state and schedules the next update
   */
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + acomulator) // Calculate the next count value
      if (result > end) return setCount(end) // Check if the next count value exceeds the target
      setCount(result) // Update the count state
      ref.current = result // Update the ref value
    }
    setTimeout(updateCounterState, 100) // Schedule the next update after 1 second
  }

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      updateCounterState()
    }
    return () => {
      isMounted = false
    }
  }, [start, end])
  return <>{count}</> // Return the current count value
}
export default CountUp
