import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { hackathonsData } from '../data/portfolioData'
import styles from '../styles/pages/Hackathons.module.css'

function Hackathons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Helmet>
        <title>Hackathons - Mikhil Sai N</title>
        <meta name="description" content="My hackathon achievements and awards" />
      </Helmet>

      <motion.article
        className={styles.hackathonsPage}
        data-page="hackathons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>Hackathons & Events</h2>
        </header>

        <motion.section
          className={styles.hackathonsContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathonsData.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              className={styles.hackathonCard}
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.hackathonTitle}>{hackathon.title}</h3>
                  <p className={styles.hackathonEvent}>{hackathon.event}</p>
                </div>
                <span className={styles.achievement}>{hackathon.achievement}</span>
              </div>

              <p className={styles.hackathonDate}>{hackathon.date}</p>
              <p className={styles.hackathonDescription}>{hackathon.description}</p>

              <div className={styles.cardBadge}>
                <span className={styles.badgeText}>{hackathon.achievement}</span>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </motion.article>
    </>
  )
}

export default Hackathons
