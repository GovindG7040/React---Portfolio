import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
      </Routes>
    </BrowserRouter>
      {/* <h1>routing app</h1> */}
      {/* <Home/> */}
      {/* <About/>
      <Contact/> */}
    </>
  )
}

export default App
