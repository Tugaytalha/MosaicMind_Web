import '../css/home.css'
import { Link } from 'react-router-dom'

export default function navbar(){
	return (
		<nav className="navbar">
			<Link className='text-link' to="/machines"><div className='text-3'>Devices</div></Link>
			<Link className='text-link' to="/"><div className='text-3'>Log Out</div></Link>
			<Link className='text-link' to="/usermanuel"><div className='text-3'>User Manuel</div></Link>
		</nav>
	)
}