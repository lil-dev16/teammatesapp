import React from 'react'
import Navbar from '../components/Navbar'

const Employees = ({teams, employees, handleChangeCurrentTeam, handleClickCard}) => {
    
  return (
    <div className='sel'>
      <Navbar />
        <select name="teams" id="" value={teams} onChange={handleChangeCurrentTeam}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">teamC</option>
            <option value="TeamD">TeamD</option>
        </select>
        <div className='employ'>
            {
            employees.map(({id, fullName, designation, gender, teamName}) => {
                return(
                    <div key={id} id={id} className={teamName === teams ? 'employeeactive' : 'employee'} style={{textAlign: 'center'}} onClick={handleClickCard}>
                        <div style={{backgroundColor: 'black', width: '100%', height: '200px'}}></div>
                        <h1>{fullName}</h1>
                        <p>{designation}</p>
                        <p>{gender}</p>
                    </div>
                )
            })
          }
        </div>
    </div>
  )
}

export default Employees