import React from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends React.Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/ipl')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      const formattedData = data.teams.map(team => ({
        name: team.name,
        id: team.id,
        teamImageUrl: team.team_image_url,
      }))
      this.setState({teamsData: formattedData, isLoading: false})
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <div className="home-container">
        <ul className="home-logo">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
          </li>
          <li>
            <h1>IPL Dashboard</h1>
          </li>
        </ul>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="team-cards-container">
            {teamsData.map(each => (
              <TeamCard key={each.id} favTeam={each} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Home
