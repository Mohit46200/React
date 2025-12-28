import { useState } from 'react'
import './App.css'
import Notification from './components/Notification'

function App() {
    const [showPage, setShowPage] = useState(false);

  return (
    <>
       <button onClick={() => setShowPage(true)}>
        Open PageA
      </button>
      {showPage && <Notification/>}
    </>
  )
}

export default App
