import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import CoursePage from './components/CoursePage'
import CourseOpenPage from './components/CourseOpenPage'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <>
      <Navbar />   {/* Always visible */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/course' element={<CourseOpenPage />} />
      </Routes>
      
      <Footer />   {/* Always visible */}
    </>
  )
}

export default App
