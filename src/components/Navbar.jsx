import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { label: 'About', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Skills', path: '/skills' },
    { label: 'Hackathons', path: '/hackathons' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              onClick={() => navigate(link.path)}
              data-nav-link
            >
              {link.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
