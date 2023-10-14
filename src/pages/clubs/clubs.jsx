import Navbar from "../../components/navbar/navbar";
import './clubs.css'
import { Link } from 'react-router-dom'

import FTN from '../../starville/fortuna.png'
import ATL from '../../starville/atletico.jpg'
import ACS from '../../starville/AC.png'
import EFC from '../../starville/east.png'
import CMT from '../../starville/comets.png'
import CNT from '../../starville/central.png'
import OLS from '../../starville/OL.png'
import ARS from '../../starville/arlington.png'

export default function Clubs() {
    let clubs = ['FTN', 'ATL', 'ACS', 'EFC', 'CMT', 'CNT', 'OLS', 'ARS']
    let clubsInsta = ['https://www.instagram.com/fortunamadisonfc/', 'https://www.instagram.com/atleticostatvillefc/', 'https://www.instagram.com/ac_statville/', 'https://www.instagram.com/eaststat_fc/', 'https://www.instagram.com/statville_comets/', 'https://www.instagram.com/central_statvillefk/', 'https://www.instagram.com/olympiquesofficial/', 'https://www.instagram.com/arlington_stingers_/']
    let fansInsta = ['https://www.instagram.com/fortuna_maniacs/', 'https://www.instagram.com/atleticostatvillefans/', 'https://www.instagram.com/ultras_acstatville/', 'https://chinkeetan.com/wp-content/uploads/2018/08/no-support-480.gif', 'https://chinkeetan.com/wp-content/uploads/2018/08/no-support-480.gif', 'https://chinkeetan.com/wp-content/uploads/2018/08/no-support-480.gif', 'https://www.instagram.com/olympicos_statville_ultras/', 'https://chinkeetan.com/wp-content/uploads/2018/08/no-support-480.gif']
    return (
        <div>
            <Navbar />
            <div className="clubsContainer">
                {clubs.map(function(object, i) {
                    return (
                        <Club key={i} name={clubs[i]} crest={eval(clubs[i])} clubIG={clubsInsta[i]} fansIG={fansInsta[i]} />
                    )
                })}
            </div>
        </div>
    )
}

function ClubPopUp(club, crest) {
    return (
        <div>
            <p>CLUB</p>
            <img src={FTN} />
            <a href="https://google.com">INSTAGRAM</a>
        </div>
    )
}

function Club(name, crest, clubIG, fansIG) {
    return (
        <div className="clubInfosContainer">
            <div className="clubSquare">
                <img className="clubCrest" src={Object.values(name)[1]} />
                {Object.values(name)[0]}
            </div>
            <a href={Object.values(name)[2]} target="_blank"><p>club's instagram</p></a>
            <a href={Object.values(name)[3]} target="_blank"><p style={{marginBottom: '-40px', color: 'grey'}}>fans' instagram</p></a>
        </div>
    )
}