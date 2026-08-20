import React, { useState } from 'react'

function useToggle(inititalVal = "light") {

    const [theme, settheme] = useState(inititalVal)

    function Toggle(){
  
        settheme((prev) => {
            return prev = ( prev == "light" )? "dark" : "light"
        })
    }

    function updateTheme(PrevTheme){
        settheme(PrevTheme)
    }

  return [theme , Toggle ,updateTheme]
}

export default useToggle
