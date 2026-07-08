import React from 'react'
import SkillCard from './SkillCard'
import ProjectCard from './ProjectCard'

export default function OwnerCard({ person }) {
  return (
    <div className="profile-card owner-card">
      <div className="avatar">KA</div>
      <div className="card-header">
        <div>
          <h3>{person.name}</h3>
          <p className="role">{person.role}</p>
        </div>
        <span className="status-pill">Owner</span>
      </div>

      <div className="section-block">
        <h4>Skills</h4>
        <div className="chips-row">
          {person.skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h4>Projects</h4>
        <div className="projects-grid">
          {person.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h4>Technologies</h4>
        <div className="chips-row">
          {person.technologies.map((tech) => (
            <SkillCard key={tech} skill={tech} />
          ))}
        </div>
      </div>

      <div className="card-actions">
        <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={person.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`tel:${person.contact}`}>Contact</a>
      </div>
    </div>
  )
}
