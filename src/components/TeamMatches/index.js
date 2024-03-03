import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {useParams} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamMatchesData, setTeamMatchesData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [umpires, setUmpires] = useState('')

  useEffect(() => {
    const fetchTeamMatches = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch team matches')
        }
        const data = await response.json()
        setTeamMatchesData(data)
        setUmpires(data.latest_match_details.umpires)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching team matches:', error)
        setIsLoading(false)
      }
    }

    fetchTeamMatches()
  }, [id])

  const {team_banner_url, latest_match_details, recent_matches} =
    teamMatchesData

  return (
    <div className="team-matches-container">
      {isLoading ? (
        <div className="loader-container" data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div>
          <img
            src={team_banner_url}
            alt="team banner"
            className="team-banner"
          />
          <LatestMatch latestMatchDetails={latest_match_details} />
          <div className="recent-matches-container">
            <h1 className="recent-matches-heading">Recent Matches</h1>
            <p>{umpires}</p>
            <div className="matches-list">
              {recent_matches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamMatches
