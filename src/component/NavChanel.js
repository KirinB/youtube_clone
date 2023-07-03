import './NavChanel.css'

function NavChanel({Name , src, alt, dot}) {
    return ( 

        <div className='Nav-chanel'>
            <img src={src} alt={alt} className='Nav-chanel-avatar'/>
            <p className='Nav-chanel-title'>{Name}</p>
            {dot && <div className='nav-channel-dot'></div>}
        </div>

     );
}

export default NavChanel;