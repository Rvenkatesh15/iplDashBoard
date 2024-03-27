import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {favTeam} = props
  return (
    <Link to={`/team-matches/${favTeam.id}`} className="team-card-link">
      <div className="team-card">
        <img
          src={favTeam.teamImageUrl}
          alt={favTeam.name}
          className="team-card-img"
        />
        <p className="team-card-name">{favTeam.name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
