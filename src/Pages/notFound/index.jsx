import './style.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return(
        <div>
            <h1 className="heading-notfound">404 ERROR PAGE</h1>
            <h1 className='subheading-notfound'>404</h1>
            <h1 className='wrong-notfound'>You Wrong Acces Page</h1>
            <Link to='/home'>
            <button className='btn-notfound'>Click Me!, To Page!</button>
            </Link>
        </div>
    )
}

export default NotFound