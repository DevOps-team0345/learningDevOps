import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h4>{project.name}</h4>
      <p>{project.description || 'Public repository contribution'}</p>
      <a href={project.url} target="_blank" rel="noreferrer">
        View Repo
      </a>
    </div>
  )
}
