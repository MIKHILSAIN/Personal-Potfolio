import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { resumeData } from '../data/portfolioData'
import styles from '../styles/pages/Resume.module.css'

function Resume() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Helmet>
        <title>Resume - Mikhil Sai N</title>
        <meta name="description" content="My professional resume and skills" />
      </Helmet>

      <motion.article
        className={styles.resumePage}
        data-page="resume"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>{resumeData.title}</h2>
        </header>

        <section className={styles.resumeContent}>
          {/* Education Section */}
          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Education</h3>
            <motion.div className={styles.sectionContent}>
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={styles.resumeItem}
                  variants={itemVariants}
                >
                  <h4 className={styles.itemTitle}>{edu.title}</h4>
                  <p className={styles.itemSubtitle}>{edu.institution}</p>
                  <p className={styles.itemDate}>{edu.date}</p>
                  <p className={styles.itemDescription}>{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Experience</h3>
            <motion.div className={styles.sectionContent}>
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className={styles.resumeItem}
                  variants={itemVariants}
                >
                  <h4 className={styles.itemTitle}>{exp.title}</h4>
                  <p className={styles.itemSubtitle}>{exp.company}</p>
                  <p className={styles.itemDate}>{exp.date}</p>
                  <p className={styles.itemDescription}>{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Skills</h3>
            <motion.div className={styles.skillsGrid}>
              {resumeData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillItem}
                  variants={itemVariants}
                >
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <motion.div
                      className={styles.skillProgress}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{ backgroundColor: 'var(--orange-yellow-crayola)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </section>
      </motion.article>
    </>
  )
}

export default Resume
