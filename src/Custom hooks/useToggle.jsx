import React, { useState } from 'react'

function useToggle(inititalVal = "light") {

    const [theme, settheme] = useState(inititalVal)

    function Toggle(){
  
        settheme((prev) => {
            return prev = ( prev == "light" )? "dark" : "light"
        })
    }

  return [theme , Toggle]
}

export default useToggle
