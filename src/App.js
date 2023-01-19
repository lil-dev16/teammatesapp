import Employees from "./components/Employees";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Teams from './pages/Teams'


function App() {

  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem('team')) || 'TeamD')
    const [employees, setEmployees] = useState( JSON.parse(localStorage.getItem('employees')) || [{
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

      useEffect(()=> {
        localStorage.setItem('employees', JSON.stringify(employees))
      }, [employees])
    
      useEffect(() => {
        localStorage.setItem('team', JSON.stringify(teams))
      })
    
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
    <div className="App">
      <Header teams={teams} employees={employees}/>
      <Employees 
      teams={teams}
      employees={employees}
      handleChangeCurrentTeam={handleChangeCurrentTeam}
      handleClickCard={handleClickCard}/>
      <Teams employees={employees} team = {teams}/>
    </div>
  );
}

export default App;
