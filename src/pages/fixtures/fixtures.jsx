import Navbar from '../../components/navbar/navbar'
import './fixtures.css'
import * as teams from '../../pages/table/table'

export default function Fixtures() {
    let gameThree = [teams.central, teams.atletico, 'saturday, 5pm']
    let gameFour = [teams.fortuna, teams.east, 'sunday, 3pm']
    let games = [gameThree, gameFour]
    return (
        <div>
            <Navbar />
            <p className='mathcday'>MATCHDAY 3</p>
            {games.map(function(object, i){
                return (
                    <div key={i} className='wholeFixture'>
                        <div className='fixture'>
                            <div className='tfeams'>
                                <img className='tfimage' src={games[i][0][8]} />
                                <div className='tfeam'>{games[i][0][1]}</div>
                                <div className='tfeam'>-</div>
                                <div className='tfeam'>{games[i][1][1]}</div>
                                <img className='tfimage' src={games[i][1][8]} />
                            </div>
                            <div className='timeContainer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill: '#000'}}><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                                <div className='time'>{games[i][2]}</div>
                            </div>
                        </div>
                        <div className='details'>
                            <div className='lineup'>
                                <div className='team1'>
                                    <p>lineups:</p>
                                    <ul>
                                        <li>afgus</li>
                                    </ul>
                                </div>
                                <div className='team2'></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}