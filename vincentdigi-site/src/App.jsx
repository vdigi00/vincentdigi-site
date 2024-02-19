import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Hero />
      {/* <Main /> */}
    </div>
  )
}

export default App