import React from 'react'
import { useState } from 'react';

const Employees = () => {
    const [teams, setTeams] = useState('TeamA')
    const [employees, setEmployees] = useState( [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]);
    
      const handleChangeCurrentTeam = (e) => {
        console.log(e.target.value);
        setTeams(e.target.value)
      }

      const handleClickCard = (e) => {
        const newEmployees = employees.map((item) => item.id === parseInt(e.currentTarget.id) ? (item.teamName === teams) ? {...item, teamName: ''} : {...item, teamName: teams} : item)
        setEmployees(newEmployees);
        console.log(e.currentTarget.id);
      }
  return (
    <div>
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
                    <div id={id} className={teamName === teams ? 'employeeactive' : 'employee'} style={{textAlign: 'center'}} onClick={handleClickCard}>
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