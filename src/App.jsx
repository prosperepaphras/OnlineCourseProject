import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import CoursePage from './components/CoursePage'
import CourseOpenPage from './components/CourseOpenPage'

const App = () => {
  return (
    <>
      <Navbar />   {/* Always visible */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/course' element={<CourseOpenPage />} />
      </Routes>
      
      <Footer />   {/* Always visible */}
    </>
  )
}

export default App
