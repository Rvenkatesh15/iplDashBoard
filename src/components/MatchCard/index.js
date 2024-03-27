// import React from 'react'
// import './index.css'

// const MatchCard = props => {
//   const {recentMatches} = props
//   const {competing_team_logo, competing_team, match_status, result} =
//     recentMatches

//   const getMatchStatusClassName = status =>
//     status === 'Won' ? 'match-won' : 'match-lost'
//   const matchStatusClassName = `match-status ${getMatchStatusClassName(
//     match_status,
//   )}`

//   return (
//     <li className="match-item">
//       <img
//         src={competing_team_logo}
//         className="competing-team-logo"
//         alt={`competing team ${competing_team}`}
//       />
//       <p className="competing-team-name">{competing_team}</p>
//       <p className="result">{result}</p>
//       <p className={matchStatusClassName}>{match_status}</p>
//     </li>
//   )
// }

// export default MatchCard
import './index.css'
const MatchCard = props => {
  const {recentMatches} = props
  const {competing_team_logo, competing_team, match_status, result} =
    recentMatches

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    match_status,
  )}`

  return (
    <li className="match-item">
      <img
        src={competing_team_logo}
        className="competing-team-logo"
        alt={`competing team ${competing_team}`}
      />
      <p className="competing-team-name">{competing_team}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{match_status}</p>
    </li>
  )
}

export default MatchCard
