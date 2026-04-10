import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import styles from '../styles/pages/NotFound.module.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>

      <motion.article
        className={styles.notFoundPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.content}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>

          <motion.button
            className={styles.homeButton}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back Home
          </motion.button>
        </motion.div>
      </motion.article>
    </>
  )
}

export default NotFound
