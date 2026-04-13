import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import RetreatPage from './pages/RetreatPage'
import RetreatDetailsPage from './pages/RetreatDetailsPage'
import WellnessPage from './pages/WellnessPage'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="scroll-smooth">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/retreat"
            element={
              <>
                <Navbar />
                <RetreatPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/learn-more"
            element={
              <>
                <Navbar />
                <RetreatDetailsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/wellness"
            element={
              <>
                <Navbar />
                <WellnessPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
