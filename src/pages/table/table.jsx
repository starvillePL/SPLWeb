import { useState } from "react"
import Navbar from "../../components/navbar/navbar"
import './table.css'
import FTN from '../../starville/fortuna.png'
import ATL from '../../starville/atletico.jpg'
import ACS from '../../starville/AC.png'
import EFC from '../../starville/east.png'
import CMT from '../../starville/comets.png'
import CNT from '../../starville/central.png'
import OLS from '../../starville/OL.png'
import ARS from '../../starville/arlington.png'
export let fortuna = [1, 'FTN', 2, 2, 0, 0, 67, 10, FTN]
export let atletico = [2, 'ATL', 2, 2, 0, 0, 61, 12, ATL]
export let AC = [3, 'ACS', 2, 1, 0, 1, 18, 30, ACS]
export let east = [4, 'EFC', 2, 1, 0, 1, 11, 17, EFC]
export let comets = [5, 'CMT', 2, 1, 0, 1, 18, 33, CMT]
export let central = [6, 'CNT', 2, 1, 0, 1, 16, 50, CNT]
export let OL = [7, 'OLS', 2, 0, 0, 2, 12, 22, OLS]
export let arlington = [8, 'ARS', 2, 0, 0, 2, 8, 47, ARS]

export default function Table() {

    let teams = [fortuna, AC, east, comets, OL, central, arlington, atletico]
    const sortedTeams = []

    for (let i = 0; i < teams.length; i++) {
        teams[i].push(teams[i][6] - teams[i][7])
        teams[i].push(teams[i][3] * 3 + teams[i][4])
        for (let j = 0; j < teams.length; j++) {
            teams[j][0] == i + 1 ? sortedTeams.push(teams[j]) : {}
        }
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className="topTableLine">
                    <p className="pos">pos</p>
                    <p className="team">team</p>
                    <p className="P">played</p>
                    <p className="W">win</p>
                    <p className="D">draw</p>
                    <p className="L">loss</p>
                    <p className="GF">goals for</p>
                    <p className="GA">goals against</p>
                    <p className="GD">goal difference</p>
                    <p className="points">points</p>
                </div>
                {teams.map(function(object, i){
                    return (
                        <div key={i} className="tableContainer">
                            <div className="pos"><p>{sortedTeams[i][0]}</p></div>
                            <div className="team"><div><img className="teamLogo" src={sortedTeams[i][8]} /><p>{sortedTeams[i][1]}</p></div></div>
                            <div className="P"><p>{sortedTeams[i][2]}</p></div>
                            <div className="W"><p>{sortedTeams[i][3]}</p></div>
                            <div className="D"><p>{sortedTeams[i][4]}</p></div>
                            <div className="L"><p>{sortedTeams[i][5]}</p></div>
                            <div className="GF"><p>{sortedTeams[i][6]}</p></div>
                            <div className="GA"><p>{sortedTeams[i][7]}</p></div>
                            <div className="GD"><p>{sortedTeams[i][9]}</p></div>
                            <div className="points"><p>{sortedTeams[i][10]}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}