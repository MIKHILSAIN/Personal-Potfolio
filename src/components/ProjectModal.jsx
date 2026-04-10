import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import styles from '../styles/components/ProjectModal.module.css'

function ProjectModal({ project, onClose }) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        data-overlay
      />

      {/* Modal */}
      <motion.div
        className={styles.modalContainer}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        data-modal-container
      >
        <motion.button
          className={styles.closeBtn}
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          data-modal-close-btn
        >
          <FiX size={24} />
        </motion.button>

        <motion.div
          className={styles.modalImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            data-modal-img
          />
        </motion.div>

        <motion.div
          className={styles.modalContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={styles.modalTitle} data-modal-title>
            {project.title}
          </h3>

          <p className={styles.modalCategory}>
            {project.category.replace('-', ' ')}
          </p>

          <p className={styles.modalDescription} data-modal-text>
            {project.description}
          </p>

          <div className={styles.technologiesSection}>
            <h4 className={styles.technologiesTitle}>Technologies Used</h4>
            <div className={styles.technologiesList}>
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className={styles.technologyTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.a
            href={project.link}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ProjectModal
