import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import Themebutton from './components/Themebutton'

function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme = function(){
    setThemeMode("light")
  }
  const darkTheme = function(){
    setThemeMode("dark")
  }


  //actual change in theme
   useEffect(function(){
    const colour =document.querySelector('html').classList
    colour.remove("dark","light")
    colour.add(themeMode)
   },[themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebutton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
        </div>
    </ThemeProvider>
  )
}

export default App
