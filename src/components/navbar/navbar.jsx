import './navbar.css'
import stavilleLogo from '../../starville/SPLlogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="topBar">
            <Link to='/'><img src={stavilleLogo} className="SPLlogo" /></Link>
            <div className="PL">
                <p>Premier League</p>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 320 512" style={{fill: '#fff'}}><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <div className="menu PLmenu">
                    <Link to='/SPLWeb/fixtures'><p>Fixtures</p></Link>
                    <Link to='/SPLWeb/results'><p>Results</p></Link>
                    <Link to='/SPLWeb/table'><p>Table</p></Link>
                    <Link to='/SPLWeb/clubs'><p>Clubs</p></Link>
                </div>
            </div>
            <div className="fantasy"> 
                <p>Fantasy</p>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 320 512" style={{fill: '#fff'}}><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <div className="menu fantasyMenu">
                    <p>Fantasy</p>
                    <p>Fantasy Draft</p>
                </div>
            </div> 
            <div className="community"> 
                <p>Community</p>
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 320 512" style={{fill: '#fff'}}><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <div className="menu communityMenu">
                    <a target="_blank" href="https://discord.gg/F826GhcT95"><p>Discord</p></a>
                    <a target='_blank' href='https://www.instagram.com/spl_centrals/'><p>Instagram</p></a>
                </div>
            </div>
        </div>
    )
}