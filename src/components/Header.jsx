import React from 'react'

const Header = ({teams, employees}) => {
  return (
    <div>
        <h1>Team Member Allocation</h1>
        <h3>{teams} has {employees.filter(emp => emp.teamName == teams).length} members</h3>
    </div>
  )
}

export default Header