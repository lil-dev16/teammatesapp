import React from 'react'
import Employees from '../pages/Employees'
import { Link } from 'react-router-dom'
import Teams from '../pages/Teams'

const Navbar = () => {
  return (
    <div>
        <div className='nav_con'>
            <div className="nav_list">
                <Link to='/'>Home</Link>
                <Link to='/teams'>Teams</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar