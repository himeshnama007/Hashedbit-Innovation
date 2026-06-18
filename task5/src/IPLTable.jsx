import { useEffect, useState } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.NRR - b.NRR);
        setTeams(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>IPL 2022 Points Table</h1>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPLTable;