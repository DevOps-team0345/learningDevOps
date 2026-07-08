import React from 'react'
import { motion } from 'framer-motion'

export default function TeamHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="hero-shell"
    >
      <div className="hero-mesh" />
      <div className="hero-particles" aria-hidden="true">
        {[...Array(16)].map((_, index) => (
          <span key={index} style={{ '--delay': `${index * 0.18}s` }} />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        className="hero-glass"
      >
        <p className="hero-eyebrow">ENGINEERING TEAM / 2026</p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hero-title"
        >
          Learning DevOps Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hero-subtitle"
        >
          Building Scalable Software With Modern Technology
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
