import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Experience from './Pages/Experience/Experience'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'

function App() {
  return (
    <>

      
        <Navbar />
        <div className="main-container">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
        
    </>
  )
}

export default App