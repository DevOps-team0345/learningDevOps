import React from 'react'

export default function TeamPopup({ visible, onClose }) {
  if (!visible) return null

  return (
    <div className="team-popup">
      <div className="popup-card">
        <span className="popup-badge">Premium DevOps Team</span>
        <h2>Learning DevOps Team</h2>
        <p>We build systems with automation, modern cloud workflows, and collaborative engineering excellence.</p>
        <button type="button" onClick={onClose}>
          Enter Portfolio
        </button>
      </div>
    </div>
  )
}
