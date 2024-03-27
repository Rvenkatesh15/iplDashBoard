// import React, {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import './index.css'
// import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'

// class TeamMatches extends Component {
//   state = {blogData: {}, isLoading: true}

//   componentDidMount() {
//     this.getBlogItemData()
//   }

//   getBlogItemData = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
//     const data = await response.json()

//     const updatedData = {
//       teamBannerUrl: data.team_banner_url,
//       latestMatchDetails: data.latest_match_details,
//       recentMatches: data.recent_matches,
//     }
//     this.setState({blogData: updatedData, isLoading: false})
//   }

//   getRouteClassName = () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     switch (id) {
//       case 'RCB':
//         return 'rcb'
//       case 'KKR':
//         return 'kkr'
//       case 'KXP':
//         return 'kxp'
//       case 'RR':
//         return 'rr'
//       case 'MI':
//         return 'mi'
//       case 'SRH':
//         return 'srh'
//       case 'DC':
//         return 'dc'
//       default:
//         return ''
//     }
//   }

//   renderTeamMatchDetails = () => {
//     const {blogData} = this.state
//     const {teamBannerUrl, latestMatchDetails, recentMatches} = blogData
//     return (
//       <div className={`team-matches-vertical ${this.getRouteClassName()}`}>
//         <img src={teamBannerUrl} alt="teamBannerUrl" className="teamBanner" />
//         <p>Latest Matches</p>
//         <LatestMatch
//           latestMatchDetails={latestMatchDetails}
//           key={latestMatchDetails.id}
//         />
//         <div>
//           {recentMatches.map(match => (
//             <MatchCard recentMatch={match} key={match.id} />
//           ))}
//         </div>
//       </div>
//     )
//   }

//   render() {
//     const {isLoading} = this.state

//     return (
//       <div className="blog-container">
//         {isLoading ? (
//           <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
//         ) : (
//           this.renderTeamMatchDetails()
//         )}
//       </div>
//     )
//   }
// }

// export default TeamMatches

import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params

      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()

      this.setState({blogData: data, isLoading: false})
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({isLoading: false})
    }
  }
  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      case 'CSK':
        return 'csk'
      default:
        return ''
    }
  }

  render() {
    const {isLoading, blogData} = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className={`team-matches-content ${this.getRouteClassName()}`}>
            <div className="team-banner">
              <img
                src={blogData.team_banner_url}
                alt="Team Banner"
                className="teambanner"
              />
            </div>
            <LatestMatch latestMatchDetails={blogData.latest_match_details} />
            <p>Recent Matches</p>
            <ul className="match-list">
              {blogData.recent_matches.map(match => (
                <MatchCard key={match.id} recentMatches={match} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
