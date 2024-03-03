import './index.css'

const MatchCard = ({match}) => {
  const {
    competing_team,
    competing_team_logo,
    date,
    venue,
    match_status,
    result,
    man_of_the_match,
  } = match

  return (
    <div className="match-card">
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="team-logo"
      />
      <div>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-result">{result}</p>
        <p className="match-status">{match_status}</p>
        <p className="latest-match">{competing_team}</p>
        <p className="man-of-the-match">{`Man of the Match: ${man_of_the_match}`}</p>
      </div>
    </div>
  )
}

export default MatchCard
