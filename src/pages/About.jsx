import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { aboutData } from '../data/portfolioData'
import styles from '../styles/pages/About.module.css'

function About() {
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Helmet>
        <title>About - Mikhil Sai N</title>
        <meta name="description" content="Learn more about my background and expertise" />
      </Helmet>
      
      <motion.article
        className={styles.aboutPage}
        data-page="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>{aboutData.title}</h2>
        </header>

        <section className={styles.aboutContent}>
          <motion.div
            ref={textRef}
            className={styles.aboutText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{aboutData.text}</p>
          </motion.div>

          <motion.div
            className={styles.highlights}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.highlight}>
              <h3>Frontend Development</h3>
              <p>Creating interactive user interfaces with React, HTML, CSS, and modern JavaScript</p>
            </div>
            <div className={styles.highlight}>
              <h3>Backend Development</h3>
              <p>Building robust APIs and server-side applications with Node.js and Express</p>
            </div>
            <div className={styles.highlight}>
              <h3>Responsive Design</h3>
              <p>Designing beautiful, mobile-first experiences that work across all devices</p>
            </div>
            <div className={styles.highlight}>
              <h3>UI/UX Focus</h3>
              <p>Passionate about creating seamless user experiences with smooth animations</p>
            </div>
          </motion.div>
        </section>
      </motion.article>
    </>
  )
}

export default About
