import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Hackathons from './pages/Hackathons'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './styles/App.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Mikhil Sai N - Web Developer Portfolio</title>
        <meta name="description" content="Web developer portfolio showcasing projects, skills, and experience." />
      </Helmet>
      <Router>
        <main className="main-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  )
}

export default App
