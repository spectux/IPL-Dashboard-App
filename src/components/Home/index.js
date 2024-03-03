import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()
        setTeams(data.teams)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    fetchTeams()
  }, [])

  return (
    <div className="home-container">
      <div className="Dashboard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="logo"
        />
        <h1 className="dash-text">IPL Dashboard</h1>
      </div>
      {isLoading ? (
        <div className="loader-container" data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <div className="teams-list">
          {teams.map(team => (
            <Link
              key={team.id}
              to={`/team-matches/${team.id}`}
              className="team-link"
            >
              <TeamCard team={team} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
