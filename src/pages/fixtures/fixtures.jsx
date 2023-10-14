import Navbar from '../../components/navbar/navbar'
import './fixtures.css'

export default function Fixtures() {
    let gameOne = ['ACS', 'CMT', 'saturday 3pm']
    let gameTwo = ['OLS', 'ARS', 'saturday 4pm']
    let gameThree = ['CNT', 'ATL', 'saturday 5pm']
    let gameFour = ['FTN', 'EFC', 'sunday 3pm']
    let games = [gameOne, gameTwo, gameThree, gameFour]
    return (
        <div>
            <Navbar />
            {games.map(function(object, i){
                return (
                    <div className='fixture'>
                        <div className='tfeams'>
                            <div className='tfeam'>{games[i][0]}</div>
                            <div className='tfeam'>-</div>
                            <div className='tfeam'>{games[i][1]}</div>
                        </div>
                        <div className='time'>{games[i][2]}</div>
                    </div>
                )
            })}
        </div>
    )
}