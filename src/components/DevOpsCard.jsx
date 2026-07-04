import React from 'react'

export default function DevOpsCard({ engineer }) {
  return (
    <div className="devops-card">
      <div className="card-banner">{engineer.focus}</div>
      <h3>{engineer.name}</h3>
      <p><strong>Role:</strong> {engineer.role}</p>
      <p><strong>Skills:</strong> {engineer.skills.join(', ')}</p>
      <p><strong>Focus:</strong> {engineer.focus}</p>
    </div>
  )
}
