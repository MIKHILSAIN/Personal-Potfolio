import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../data/portfolioData'
import ProjectModal from '../components/ProjectModal'
import styles from '../styles/pages/Portfolio.module.css'

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'applications', label: 'Applications' }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>Portfolio - Mikhil Sai N</title>
        <meta name="description" content="View my latest projects and portfolio work" />
      </Helmet>

      <motion.article
        className={styles.portfolioPage}
        data-page="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>My Portfolio</h2>
        </header>

        {/* Filter Section */}
        <div className={styles.filterSection}>
          <div className={styles.filterContainer}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`${styles.filterBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-filter-btn
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={styles.projectItem}
                data-filter-item
                data-category={project.category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                layout
              >
                <div className={styles.projectImage}>
                  <motion.div
                    className={styles.imageOverlay}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className={styles.viewBtn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectCategory}>{project.category.replace('-', ' ')}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.article>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio
