import React from 'react'
import './index.css'

const TeamCard = ({team}) => {
  const {name, id, team_image_url} = team

  return (
    <div className="team-card">
      <img src={team_image_url} alt={name} className="team-logo" />
      <p className="team-name">{name}</p>
    </div>
  )
}

export default TeamCard
