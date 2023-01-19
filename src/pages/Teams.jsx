import React, { useState } from 'react'

const Teams = ({employees, team, setTeams}) => {
    
    const handleTeams = () => {
        const teams = []
        
        const teamA = employees.filter((empl) => empl.teamName === 'TeamA');
        const teamAMembers = {team:'TeamA',collapsed: team === 'TeamA' ? false : true, members: teamA}
        teams.push(teamAMembers)

        const teamB = employees.filter((empl) => empl.teamName === 'TeamB');
        const teamBMembers = {team:'TeamB',collapsed: team === 'TeamB' ? false : true, members: teamB}
        teams.push(teamBMembers)

        const teamC = employees.filter((empl) => empl.teamName === 'TeamC');
        const teamCMembers = {team:'TeamC',collapsed: team === 'TeamC' ? false : true, members: teamC}
        teams.push(teamCMembers)

        const teamD = employees.filter((empl) => empl.teamName === 'TeamD');
        const teamDMembers = {team:'TeamD',collapsed: team === 'TeamD' ? false : true, members: teamD}
        teams.push(teamDMembers)
console.log(teamBMembers);
        return teams
    }
    const [groupedMembers, setGrouped] = useState(handleTeams())

    const handleTeamClick = (e) => {
        const transformedGroup = groupedMembers.map((groups) => groups.team === e.currentTarget.id ? {...groups, collapsed: !groups.collapsed} : groups
        )
        setGrouped(transformedGroup)
        setTeams(e.currentTarget.id);
    }
  return (
      <div>
        <h1>Teams</h1>
        <div>
           {groupedMembers.map((mem) => {
            return(
                <div>
                    <h1 id={mem.team} key={mem.team} onClick={handleTeamClick}>Team Name:{mem.team}</h1>
                    <div className={mem.collapsed ? 'coll': ''}>
                        <hr />
                        {mem.members.map(item => {
                            return(
                                <div>
                                    <h3>Fullname: {item.fullName}</h3>
                                    <h3>Designation: {item.designation}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
           })}
        </div>
    </div>
  )
}

export default Teams