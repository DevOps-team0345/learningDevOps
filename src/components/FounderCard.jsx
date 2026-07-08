import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FounderCard({ person }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    setTilt({ x: y * 8, y: x * 8 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="founder-card"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <div className="founder-glow" />
      <div className="founder-badge">Founder • Owner</div>
      <div className="founder-avatar">KA</div>
      <h3>{person.name}</h3>
      <p>{person.role}</p>

      <div className="founder-skills">
        {person.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="founder-projects">
        {person.projects.map((project) => (
          <a key={project.name} href={project.url} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        ))}
      </div>

      <div className="founder-actions">
        <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={person.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`tel:${person.contact}`}>Contact</a>
      </div>
    </motion.div>
  )
}
