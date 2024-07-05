import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/component/Header'
import Navbar from './assets/component/Navbar'
import Main from './assets/component/Main'
import Project from './assets/component/Project'
import Contact from './assets/component/Contact'
import Footer from './assets/component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <Navbar/>
      <Main/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
