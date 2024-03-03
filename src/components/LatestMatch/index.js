import './index.css'

const LatestMatch = ({latestMatchDetails}) => {
  const {
    competing_team,
    competing_team_logo,
    date,
    venue,
    match_status,
    result,
    man_of_the_match,
    first_innings,
    second_innings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-details">
        <img
          src={competing_team_logo}
          alt={`latest match ${competing_team}`}
          className="team-logo"
        />
        <div>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
          <p className="match-status">{match_status}</p>
          <p className="latest-match">{competing_team}</p>
          <p className="first-innings">{first_innings}</p>
          <p className="second-innings">{second_innings}</p>
          <p className="man-of-the-match">{man_of_the_match}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
