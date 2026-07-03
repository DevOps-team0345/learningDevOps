import React from 'react'
import DevOpsCard from './DevOpsCard'

const sampleEngineers = [
  { name: 'Alex Chen', role: 'Senior DevOps Engineer', skills: ['Kubernetes', 'Terraform', 'CI/CD'], focus: 'Platform reliability' },
  { name: 'Priya Singh', role: 'Site Reliability Engineer', skills: ['Prometheus', 'Grafana', 'Python'], focus: 'Observability & automation' },
  { name: 'Sam Rodriguez', role: 'Infrastructure Engineer', skills: ['AWS', 'Ansible', 'Packer'], focus: 'Infrastructure as code' },
]

export default function DevOpsList() {
  return (
    <section>
      <h2>DevOps Team</h2>
      <div className="devops-list">
        {sampleEngineers.map(e => (
          <DevOpsCard key={e.name} engineer={e} />
        ))}
      </div>
    </section>
  )
}
