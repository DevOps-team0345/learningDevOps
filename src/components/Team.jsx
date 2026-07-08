import React, { useEffect, useState } from 'react'

const teamMembers = [
  {
    name: 'Kashif Akram',
    role: 'Owner',
    bio: 'Leads the learning journey with a focus on automation, CI/CD, and cloud delivery.',
    skills: ['CI/CD', 'Docker', 'GitHub Actions', 'Vercel', 'Linux'],
    github: 'https://github.com/KashifAkram0345',
    linkedin: 'https://www.linkedin.com',
    contact: '+92-XXX-XXXXXXX'
  },
  {
    name: 'Afzal Pervaiz',
    role: 'Team Member',
    bio: 'Builds reliable pipelines and practical DevOps workflows for modern applications.',
    skills: ['Kubernetes', 'Terraform', 'Monitoring', 'Shell Scripting'],
    github: 'https://github.com/afzalpervaiz1474-cmd',
    linkedin: 'https://www.linkedin.com',
    contact: '+92-XXX-XXXXXXX'
  },
  {
    name: 'Muhammad Umar',
    role: 'Team Member',
    bio: 'Contributes to system automation, deployment practices, and infrastructure learning.',
    skills: ['AWS', 'Ansible', 'Networking', 'Cloud Basics'],
    github: 'https://github.com/muhammadumarcs307',
    linkedin: 'https://www.linkedin.com',
    contact: '+92-XXX-XXXXXXX'
  }
]

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsModalOpen(false), 4500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="team-shell">
      {isModalOpen && (
        <div className="welcome-modal" role="dialog" aria-modal="true">
          <div className="modal-badge">DevOps Portfolio</div>
          <h2>Learning DevOps Team</h2>
          <p>We combine automation, cloud practices, and modern delivery pipelines to build dependable systems.</p>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Explore Team
          </button>
        </div>
      )}

      <section className="team-hero">
        <div className="hero-copy">
          <p className="eyebrow">Professional DevOps Learning Studio</p>
          <h1>Building reliable delivery pipelines with clarity and confidence.</h1>
          <p className="hero-text">
            Our team focuses on containerization, CI/CD, GitHub automation, and cloud-ready application delivery.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="card-top">
                <span className="card-role">{member.role}</span>
                <span className="card-flag">Active</span>
              </div>
              <h3>{member.name}</h3>
              <p className="card-bio">{member.bio}</p>

              <div className="skills-wrap">
                {member.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>

              <div className="card-links">
                <a href={member.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={`tel:${member.contact}`}>Contact</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
