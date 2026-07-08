import React from 'react'
import { motion } from 'framer-motion'

const items = ['React', 'Node.js', 'Docker', 'GitHub', 'Linux', 'Cloud', 'CI/CD', 'Database']

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="tech-section"
    >
      <div className="section-label">Technology Universe</div>
      <div className="tech-grid">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className="tech-pill"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
