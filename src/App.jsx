import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import CoursePage from './components/CoursePage'
import CourseOpenPage from './components/CourseOpenPage'
import AboutUs from './components/AboutUs'
import ContactPage from './components/ContactPage'
import PricingPage from './components/PricingPage'
import { LoginPage } from './components/LoginPage'
import { SignUp } from './components/SignUp'

const App = () => {
  return (
    <>
      <Navbar />   {/* Always visible */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUs/>} />
         <Route path='/contact' element={<ContactPage/>} />
         <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/course' element={<CourseOpenPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
      
      <Footer />   {/* Always visible */}
    </>
  )
}

export default App
