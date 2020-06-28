import {useState, useEffect} from 'react'

function useScrollTracker() {
    const [current, setCurrent] = useState(0)
    const treshold = 0.5
  
    useEffect(() => {
      const handleScroll = () => {
        let current_index = window.pageYOffset / window.innerHeight
        let decimal = current_index - Math.floor(current_index)
        current_index = decimal >= treshold ?
          setCurrent(Math.ceil(current_index)) :
          setCurrent(Math.floor(current_index))
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return { current }
}

export default useScrollTracker