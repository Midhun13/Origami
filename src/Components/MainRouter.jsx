import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Academic from './Pages/Academic'
import Contact from './Pages/Contact'
import Ielts from './Pages/Ielts'
import Oet from './Pages/Oet'
import SpokenEnglish from './Pages/SpokenEnglish'



const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Academic' element={<Academic />} />
        <Route path='Ielts' element={<Ielts/>} />
        <Route path='Oet' element={<Oet/>} />
        <Route path='SpokenEnglish' element={<SpokenEnglish/>} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default MainRouter
