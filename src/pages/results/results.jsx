import { useEffect } from "react"
import Navbar from "../../components/navbar/navbar"
import * as teams from '../../pages/table/table'

export default function Results() {
    
    let game1 = [teams.central, 14, teams.arlington, 3, 'matchday 1', 'Kaan']
    let game2 = [teams.atletico, 28, teams.comets, 7, 'matchday 1', 'dave']
    let game3 = [teams.OL, 7, teams.east, 11, 'matchday 1', 'N/A']
    let game4 = [teams.fortuna, 30, teams.AC, 8, 'matchday 1', 'TNAssassin']
    let game5 = [teams.east, 0, teams.AC, 10, 'matchday 2', 'N/A']
    let game6 = [teams.comets, 11, teams.OL, 5, 'matchday 2', 'Erdi']
    let game7 = [teams.atletico, 33, teams.arlington, 5, 'matchday 2', 'polud']
    let game8 = [teams.fortuna, 37, teams.central, 2, 'matchday 2', 'vvv']
    let game9 = [teams.AC, 37, teams.comets, 0, 'matchday 3', 'N/A']
    let game10 = [teams.OL, 18, teams.arlington, 3, 'matchday 3', 'TBC']
    let games = [game10, game9, game8, game7, game6, game5, game4, game3, game2, game1]
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
                                <div className='tfeam'>|</div>
                                <div className='tfeam'>{games[i][1]}</div>
                                <div className='tfeam'>-</div>
                                <div className='tfeam'>{games[i][3]}</div>
                                <div className='tfeam'>|</div>
                                <div className='tfeam'>{games[i][2][1]}</div>
                                <img className='tfimage' src={games[i][2][8]} />
                            </div>
                            <div className='timeContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill: '#000'}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                <div className='time'>{games[i][5]}</div>
                            </div>
                            <div className='moreDetailsButton'>more details</div>
                        </div>
                        <div className='details'>
                            <div className='lineup'>
                                <div className='team1'>
                                    <ul>
                                        <li></li>
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