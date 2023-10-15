import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/navbar"
import * as teams from '../../pages/table/table'
import './results.css'

export default function Results() {
    const [detailedView, setDetailedView] = useState(false)
    
    let game1 = [teams.central, 14, teams.arlington, 3, 'matchday 1', 'Kaan', ['Halil Efe', 'fizan', 'Kaan..', 'Efe'], ['Yura', 'yarkless', 'Onkelbabbo', 'Percy (ARS)'], ['possession', '52.3%', 'kicks', '327', 'passes', '89', 'shots on goal', '25'], ['‎', '47.7%', '‎', '284', '‎', '63', '‎', '9']]
    let game2 = [teams.atletico, 28, teams.comets, 7, 'matchday 1', 'dave', ['N/A'], ['N/A'], ['N/A'], ['N/A']]
    let game3 = [teams.OL, 7, teams.east, 11, 'matchday 1', 'N/A', ['pep', 'Triq', 'fmdg', 'KingerKab'], ['NoTaT', 'strej-EAST', 'Hoppo'], ['possession', '45.4%', 'kicks', '185', 'passes', '50', 'shots on goal', '14'], ['‎', '54.6%', '‎', '173', '‎', '39', '‎', '7']]
    let game4 = [teams.fortuna, 30, teams.AC, 8, 'matchday 1', 'TNAssassin', ['TNAssassin_', 'vvv', 'pepsi', 'fanta', 'water'], ['Ballinho', 'rah (the real)', 'dyno', 'mantens', 'Jacopo'], ['possession', '60.2%', 'kicks', '482', 'passes', '150', 'shots on goal', '52'], ['‎', '39.8%', '‎', '382', '‎', '70', '‎', '33']]
    let game5 = [teams.east, 0, teams.AC, 10, 'matchday 2', 'N/A', ['N/A'], ['N/A'], ['N/A'], ['N/A']]
    let game6 = [teams.comets, 11, teams.OL, 5, 'matchday 2', 'Erdi', ['Menace', 'syon', 'Fang', 'Erdi', 'Blürr', '(SUB) davey'], ['Triq', 'set154211', 'KingerKab', 'Mr Swazy', 'Curly'], ['possession', '52.5%', 'kicks', '490', 'passes', '125', 'shots on goal', '18'], ['‎', '47.8%', '‎', '401', '‎', '96', '‎', '27']]
    let game7 = [teams.atletico, 33, teams.arlington, 5, 'matchday 2', 'polud', ['dave', 'aFakeJedi', 'comrade', 'polud', 'dorito'], ['Yura', 'Percy (ARS)'], ['possession', '69.9%', 'kicks', '437', 'passes', '113', 'shots on goal', '53'], ['‎', '30.1%', '‎', '176', '‎', '15', '‎', '37']]
    let game8 = [teams.fortuna, 37, teams.central, 2, 'matchday 2', 'vvv', ['Carlos Magnussen', 'vvv', 'Murphy', 'pepsi', 'TNAssassin_', '(SUB) fanta'], ['Halil Efe', 'Emre30', 'Kewell', 'Efe', 'Kaan..'], ['possession', '64.3%', 'kicks', '525', 'passes', '157', 'shots on goal', '63'], ['‎', '35.7%', '‎', '269', '‎', '39', '‎', '9']]
    let game9 = [teams.AC, 37, teams.comets, 0, 'matchday 3', 'N/A', ['N/A'], ['N/A'], ['N/A'], ['N/A']]
    let game10 = [teams.OL, 17, teams.arlington, 5, 'matchday 3', 'Mecha', ['Maria', 'mantens', 'Mecha', 'adamm', 'Beamer', '(SUB) topof'], ['Serra', 'Blürr'], ['possession', '55.7%', 'kicks', '178', 'passes', '64', 'shots on goal', '24'], ['‎', '44.3%', '‎', '159', '‎', '37', '‎', '9']]
    let games = [game10, game9, game8, game7, game6, game5, game4, game3, game2, game1]
    return (
        <div>
            <Navbar />
            {games.map(function(object, i){
                return (
                    <div key={i} className='wholeFixture'>
                        <div className='fixture'>
                            <div className='tfeams'>
                                <img className='tfimage' src={games[i][0][8]} />
                                <div className='tfeam'>{games[i][0][1]}</div>
                                    <div className="tfscore">
                                        <div className='tfeam'>{games[i][1]}</div>
                                        <div className='tfeam'>-</div>
                                        <div className='tfeam'>{games[i][3]}</div>
                                    </div>
                                <div className='tfeam'>{games[i][2][1]}</div>
                                <img className='tfimage' src={games[i][2][8]} />
                            </div>
                            <div className='timeContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" style={{fill: '#000'}}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                <div className='time'>{games[i][5]}</div>
                            </div>
                            <div className='moreDetailsButton' onMouseDown={() => {
                                setDetailedView(!detailedView)
                            }
                            }>detailed view</div>
                        </div>
                        <div className='details' style={{
                            display: detailedView ? 'block' : 'none'
                        }}>
                            <p className="tftitle">lineups:</p>
                            <div className='lineup'>
                                <div className='teamf'>
                                    <ul>
                                        <li className="tffeamnaes">{games[i][0][1]}</li>
                                        {
                                            games[i][6].map(function(object, j) {
                                                return (
                                                    <>
                                                        <li>{games[i][6][j]}</li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='teamf'>
                                    <ul>
                                        <li className="tffeamnaes">{games[i][2][1]}</li>
                                        {
                                            games[i][7].map(function(object, j) {
                                                return (
                                                    <li>{games[i][7][j]}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <p className='tftitle'>stats:</p>
                            <div className='lineup'>
                                <div className='teamf'>
                                    <ul>
                                        <li className="tffeamnaes">{games[i][0][1]}</li>
                                        {
                                            games[i][8].map(function(object, j) {
                                                return (
                                                    <>
                                                        <li>{games[i][8][j]}</li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='teamf'>
                                    <ul>
                                        <li className="tffeamnaes">{games[i][2][1]}</li>
                                        {
                                            games[i][9].map(function(object, j) {
                                                return (
                                                    <li>{games[i][9][j]}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}