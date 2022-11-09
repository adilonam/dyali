import { useState } from 'react'

import { NavBar } from './navbar/components/NavBar'
//prime react css
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  const [count, setCount] = useState(0)

  return (
   <NavBar></NavBar>
  )
}

export default App
