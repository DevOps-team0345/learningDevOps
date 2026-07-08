import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MemberCard({ person }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    setTilt({ x: y * 8, y: x * 8 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="member-card"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <div className="member-top">
        <div className="member-avatar">{person.initials}</div>
        <div>
          <h3>{person.name}</h3>
          <p>{person.role}</p>
        </div>
      </div>

      <div className="member-skills">
        {person.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="member-projects">
        {person.projects.slice(0, 2).map((project) => (
          <div className="mini-project" key={project.name}>
            <strong>{project.name}</strong>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="member-actions">
        <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={person.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`tel:${person.contact}`}>Contact</a>
      </div>
    </motion.div>
  )
}
