import React, { useState, useEffect } from 'react';


function useViewPort() {
    const [width, setWidth] = React.useState(window.innerWidth)
  
    useEffect(() =>{
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize)
      return () => window.removeEventListener("resize", handleWindowResize)
    },[])
  
    return {width}
  }

  export default useViewPort