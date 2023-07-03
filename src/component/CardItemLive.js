import './CardItemLive.css'
import { LiveIcon } from './icon';

function CardItemLive() {
    return ( 
    <div className='live-btn'>
    <LiveIcon className={'liveicon'} /><p>TRỰC TIẾP</p>
    </div>
     );
}

export default CardItemLive;