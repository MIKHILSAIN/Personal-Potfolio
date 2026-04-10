import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { skillsData } from '../data/portfolioData'
import styles from '../styles/pages/Skills.module.css'

function Skills() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    { title: 'Languages', skills: skillsData.languages },
    { title: 'Frameworks & Libraries', skills: skillsData.frameworks },
    { title: 'Databases', skills: skillsData.databases },
    { title: 'Tools & Technologies', skills: skillsData.tools },
  ]

  return (
    <>
      <Helmet>
        <title>Skills - Mikhil Sai N</title>
        <meta name="description" content="My technical skills and expertise" />
      </Helmet>

      <motion.article
        className={styles.skillsPage}
        data-page="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>My Skills</h2>
        </header>

        <section className={styles.skillsContent}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={styles.skillCategory}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <motion.div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={styles.skillTag}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </section>
      </motion.article>
    </>
  )
}

export default Skills
