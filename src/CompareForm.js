import React, { useState } from 'react';
import axios from 'axios';

import Stats from './Stats.js';

export default function CompareForm() {
  // Declare a new state variable, which we'll call "count"
  const [inputs , setInputs] = useState({
    user1: {name: '', service: 'Lichess'},
    user2: {name: '', service: 'Lichess'},
  })
  const [user1Stats, setUser1Stats] = useState(null);
  const [user2Stats, setUser2Stats] = useState(null)
  const [playerFound, setPlayerFound] = useState();
  console.log(user1Stats, user2Stats);
  const handleChange = (e) => {
    const {name, value} = e.target;
    const user = name.split('.')[0];
    const field = name.split('.')[1];
    setInputs({...inputs, [user]: {...inputs[user], [field]: value}});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.user1.name || !inputs.user2.name) {
      return;
    }
    const lichessUrl = "https://lichess.org/api/user/";
    const chessUrl = "https://api.chess.com/pub/player/";
    const stats = [];

    try {
      const user1Response =
        inputs.user1.service === "Lichess"
          ? await axios.get(lichessUrl + inputs.user1.name)
          : await axios.get(chessUrl + inputs.user1.name + "/stats");
      stats.push({service: inputs.user1.service, data: user1Response.data});
  
      const user2Response =
        inputs.user2.service === "Lichess"
          ? await axios.get(lichessUrl + inputs.user2.name)
          : await axios.get(chessUrl + inputs.user2.name + "/stats");
      stats.push({service: inputs.user2.service, data: user2Response.data});
    } catch (error) {
      alert("One or both players could not be found");
      return;
    }
  
    setPlayerFound(true);
    setUser1Stats(stats[0]);
    setUser2Stats(stats[1]);
  };

  return (
    <div>
      <h1>Compare Chess Players</h1>
      <form onSubmit={e => {handleSubmit(e)}}>
        <div className="form-input">
          <input name="user1.name" onChange={handleChange} placeholder="Username 1" />
        </div>
        <div>
          <select name="user1.service" onChange={handleChange}>
            <option value="Lichess">Lichess</option>
            <option value="Chess.com">Chess.com</option>
          </select>
        </div>
        <div className="form-input">
          <input name="user2.name" onChange={handleChange} placeholder="Username 2"/>
        </div>
        <div>
          <select name="user2.service" onChange={handleChange}>
            <option value="Lichess">Lichess</option>
            <option value="Chess.com">Chess.com</option>
          </select>
        </div>
        <div className='button-container'>
          <button className="button" type="submit" value="Submit">Compare</button> 
        </div>
      </form>
      {playerFound === false && 
        <p>One or both players could not be found</p>
      }
    </div>
  )
}