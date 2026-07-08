import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectShowcase({ projects }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="projects-section"
    >
      <div className="section-label">Project Showcase</div>
      <div className="projects-grid-showcase">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="showcase-card"
          >
            <div className="showcase-visual" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="showcase-stack">
              <span>GitHub</span>
              <span>Modern Stack</span>
            </div>
            <a href={project.url} target="_blank" rel="noreferrer">
              View Repository
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
