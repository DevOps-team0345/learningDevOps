import React, { useEffect, useState } from 'react'
import TeamPopup from './TeamPopup'
import FounderCard from './FounderCard'
import MemberCard from './MemberCard'
import TeamHero from './TeamHero'
import TechStack from './TechStack'
import ProjectShowcase from './ProjectShowcase'

const teamMembers = [
  {
    name: 'Kashif Akram',
    role: 'Founder & Owner',
    initials: 'KA',
    linkedin: 'https://www.linkedin.com/in/kashif-akram-834569301/',
    github: 'https://github.com/KashifAkram0345',
    contact: '03120746833',
    skills: ['React', 'JavaScript', 'Node.js', 'CI/CD', 'Docker', 'Vercel', 'Linux'],
    technologies: ['GitHub Actions', 'Tailwind', 'Vite', 'Nginx', 'Cloud Deployments'],
    projects: [
      { name: 'kashif-portfolio', description: 'Personal portfolio experience', url: 'https://github.com/KashifAkram0345/kashif-portfolio' },
      { name: 'kashif-tech', description: 'Technology learning and showcase', url: 'https://github.com/KashifAkram0345/kashif-tech' },
      { name: 'computer-_10', description: 'Developer workspace experiments', url: 'https://github.com/KashifAkram0345/computer-_10' }
    ]
  },
  {
    name: 'Umar',
    role: 'DevOps Team Member',
    initials: 'UM',
    linkedin: 'https://www.linkedin.com/in/ch-umar-94713018a/',
    github: 'https://github.com/muhammadumarcs307',
    contact: '03148426875',
    skills: ['Git', 'Linux', 'Automation', 'Cloud Basics', 'Docker', 'CI/CD'],
    technologies: ['GitHub', 'AWS', 'Ansible', 'Shell Scripting', 'Containers'],
    projects: [
      { name: 'git-learning-lab', description: 'Git and workflow practice', url: 'https://github.com/muhammadumarcs307/git-learning-lab' },
      { name: 'learningWithKashif', description: 'Learning collaboration repository', url: 'https://github.com/muhammadumarcs307/learningWithKashif' },
      { name: 'muhammadumarcs307', description: 'Developer profile repository', url: 'https://github.com/muhammadumarcs307/muhammadumarcs307' }
    ]
  },
  {
    name: 'Afzal',
    role: 'DevOps Team Member',
    initials: 'AF',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com/afzalpervaiz1474-cmd',
    contact: '03147452373',
    skills: ['Backend', 'Git', 'Linux', 'Deployment', 'APIs', 'DevOps'],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub'],
    projects: [
      { name: 'Afzal-porfolio', description: 'Portfolio project', url: 'https://github.com/afzalpervaiz1474-cmd/Afzal-porfolio' },
      { name: 'Afzal-store', description: 'Store application project', url: 'https://github.com/afzalpervaiz1474-cmd/Afzal-store' },
      { name: 'BACKENDWORK', description: 'Backend development practice', url: 'https://github.com/afzalpervaiz1474-cmd/BACKENDWORK' }
    ]
  }
]

export default function Team() {
  const [isPopupVisible, setIsPopupVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsPopupVisible(false), 4200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="team-section">
      <TeamPopup visible={isPopupVisible} onClose={() => setIsPopupVisible(false)} />
      <TeamHero />

      <div className="section-block premium-block">
        <div className="section-label">Founder Experience</div>
        <FounderCard person={teamMembers[0]} />
      </div>

      <div className="section-block premium-block">
        <div className="section-label">Team Experience</div>
        <div className="member-grid">
          {teamMembers.slice(1).map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>

      <div className="section-block premium-block">
        <div className="section-label">Team Vision</div>
        <div className="vision-card">
          <h3>Learning, Building and Deploying Modern Software</h3>
          <p>We combine engineering discipline, cloud-native thinking, and product-focused execution to ship dependable experiences.</p>
        </div>
      </div>

      <TechStack />
      <ProjectShowcase projects={[...teamMembers[0].projects, ...teamMembers[1].projects, ...teamMembers[2].projects]} />
    </section>
  )
}
