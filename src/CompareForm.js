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

  const handleChange = (e) => {
    const {name, value} = e.target;
    const user = name.split('.')[0];
    const field = name.split('.')[1];
    setInputs({...inputs, [user]: {...inputs[user], [field]: value}});
    console.log({inputs})
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (inputs.user1.name && inputs.user2.name){
      const chessUrl = "https://lichess.org/api/user/";

      const [stats1, stats2] = await Promise.all([
        axios.get(chessUrl + inputs.user1.name),
        axios.get(chessUrl + inputs.user2.name),
      ])
      .catch((error) => { 
        console.log(error + "😫");
        setPlayerFound(false);
        console.log(playerFound, "😅");
        setUser1Stats();
        setUser2Stats();
      });

      setPlayerFound(true);
      console.log(playerFound, "😅");
      setUser1Stats(stats1.data);
      setUser2Stats(stats2.data);
    }
    else {
      return
    }
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
      {user1Stats && user2Stats &&
        <Stats user1Stats={user1Stats} user2Stats={user2Stats} />
      }
      
    </div>

  )
}