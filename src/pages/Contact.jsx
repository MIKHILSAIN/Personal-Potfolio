import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { contactData } from '../data/portfolioData'
import styles from '../styles/pages/Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name'
    if (!formData.email.trim()) return 'Please enter your email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email'
    if (!formData.message.trim()) return 'Please enter a message'
    if (formData.message.length < 10) return 'Message must be at least 10 characters'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setFormStatus(validationError)
      return
    }

    setIsSubmitting(true)
    setFormStatus('')

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'kDoNAFZjCvQBPO8hi')

      // Send email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
          to_email: contactData.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'kDoNAFZjCvQBPO8hi'
      )

      setFormStatus('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ fullName: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus('Error sending message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <title>Contact - Mikhil Sai N</title>
        <meta name="description" content="Get in touch with me" />
      </Helmet>

      <motion.article
        className={styles.contactPage}
        data-page="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>{contactData.title}</h2>
        </header>

        <section className={styles.contactContent}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className={styles.infoCard} variants={itemVariants}>
              <h3>Email</h3>
              <a href={`mailto:${contactData.email}`} className={styles.contactLink}>
                {contactData.email}
              </a>
            </motion.div>

            <motion.div className={styles.infoCard} variants={itemVariants}>
              <h3>Phone</h3>
              <a href={`tel:${contactData.phone}`} className={styles.contactLink}>
                {contactData.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-form
          >
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={styles.input}
                data-form-input
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={styles.input}
                data-form-input
                required
              />
            </motion.div>

            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className={styles.textarea}
                rows="5"
                data-form-input
                required
              />
            </motion.div>

            {formStatus && (
              <motion.div
                className={`${styles.formStatus} ${formStatus.includes('Error') ? styles.error : styles.success}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-form-btn
              variants={itemVariants}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </section>
      </motion.article>
    </>
  )
}

export default Contact
