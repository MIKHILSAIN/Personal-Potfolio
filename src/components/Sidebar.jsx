import { useState } from 'react'
import { FiChevronDown, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from '../styles/Sidebar.module.css'

function Sidebar() {
  const [isContactsOpen, setIsContactsOpen] = useState(false)

  const toggleContacts = () => {
    setIsContactsOpen(!isContactsOpen)
  }

  const contacts = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'nmikhilsai@gmail.com',
      link: 'mailto:nmikhilsai@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 892 567 6110',
      link: 'tel:+918925676110'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mikhilsain/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/MIKHILSAI', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://www.instagram.com/mikhilsai_123/', label: 'Instagram' }
  ]

  return (
    <motion.aside
      className={styles.sidebar}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatarBox}>
          <motion.img
            src="/my-avatar.png"
            alt="Mikhil Sai N"
            width="80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </figure>

        <div className={styles.infoContent}>
          <h1 className={styles.name} title="Mikhil Sai N">
            Mikhil Sai N
          </h1>
          <p className={styles.title}>Web Developer</p>
        </div>

        <motion.button
          className={styles.infoMoreBtn}
          onClick={toggleContacts}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isContactsOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
          <FiChevronDown
            style={{
              transform: isContactsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </motion.button>
      </div>

      <motion.div
        className={styles.sidebarInfoMore}
        initial={false}
        animate={{ height: isContactsOpen ? 'auto' : 0, opacity: isContactsOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className={styles.separator}></div>

        <ul className={styles.contactsList}>
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.li
                key={index}
                className={styles.contactItem}
                initial={{ opacity: 0, x: -10 }}
                animate={isContactsOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.iconBox}>
                  <IconComponent size={16} />
                </div>
                <div className={styles.contactInfo}>
                  <p className={styles.contactTitle}>{contact.title}</p>
                  <a href={contact.link} className={styles.contactLink}>
                    {contact.value}
                  </a>
                </div>
              </motion.li>
            )
          })}
        </ul>

        <div className={styles.separator}></div>

        <ul className={styles.socialList}>
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.li
                key={index}
                className={styles.socialItem}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.label}
                >
                  <IconComponent size={20} />
                </a>
              </motion.li>
            )
          })}
        </ul>
      </motion.div>
    </motion.aside>
  )
}

export default Sidebar
