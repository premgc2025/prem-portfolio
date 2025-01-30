

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import AI from './components/AI'
import CV from './components/CV'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <Router>

        <div className="app">


          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        
        </div>

      </Router>
     
      <Footer/>
    </>
  )
}

export default App
