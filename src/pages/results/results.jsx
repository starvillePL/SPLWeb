import { useEffect } from "react"
import Navbar from "../../components/navbar/navbar"

export default function Results() {
    
    let game1 = ['CNT', 14, 'ARS', 3, 'matchday 1']
    let game2 = ['ATL', 28, 'CMT', 7, 'matchday 1']
    let game3 = ['OLS', 7, 'EFC', 11, 'matchday 1']
    let game4 = ['FTN', 30, 'ACS', 8, 'matchday 1']
    let game5 = ['EFC', 0, 'ACS', 10, 'matchday 2']
    let game6 = ['CMT', 11, 'OLS', 5, 'matchday 2']
    let game7 = ['ATL', 33, 'ARS', 5, 'matchday 2']
    let game8 = ['FTN', 37, 'CNT', 2, 'matchday 2']
    let games = [game8, game7, game6, game5, game4, game3, game2, game1]
    return (
        <div>
            <Navbar />
            {games.map(function(object, i){
                return (
                    <div className='fixture'>
                        <div className='tfeams'>
                            <div className='tfeam'>{games[i][0]}</div>
                            <div className='tfeam'>|</div>
                            <div className='tfeam'>{games[i][1]}</div>
                            <div className='tfeam'>-</div>
                            <div className='tfeam'>{games[i][3]}</div>
                            <div className='tfeam'>|</div>
                            <div className='tfeam'>{games[i][2]}</div>
                        </div>
                        <div className='time'>{games[i][4]}</div>
                    </div>
                )
            })}
        </div>
    )
}