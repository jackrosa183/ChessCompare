import React, { useState } from 'react';
import axios from 'axios';

import Stats from './Stats.js';

export default function CompareForm() {
  // Declare a new state variable, which we'll call "count"
  const [inputs , setInputs] = useState({
    user1: '',
    user2: '',
  })
  const [user1Stats, setUser1Stats] = useState(null);
  const [user2Stats, setUser2Stats] = useState(null)

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (inputs.user1 && inputs.user2){
      const chessUrl = "https://lichess.org/api/user/";

      const [stats1, stats2] = await Promise.all([
        axios.get(chessUrl + inputs.user1),
        axios.get(chessUrl + inputs.user2),
      ])
      .catch((error) => { 
        console.log(error + "😫");
        setUser1Stats();
        setUser2Stats();
      });
      setUser1Stats(stats1.data);
      setUser2Stats(stats2.data);
    }
    else {
      return
    }
  };

  return (
    <div>
      <h1>Compare two Lichess Users</h1>
      <form onSubmit={e => {handleSubmit(e)}}>
        <div className="form-input">
          <input name="user1" onChange={handleChange} placeholder="Username 1" />
        </div>
        <div className="form-input">
          <input name="user2" onChange={handleChange} placeholder="Username 2"/>
        </div>
        <div>
          <button type="submit" value="Submit">Compare</button> 
        </div>
      </form>
      {user1Stats && user2Stats &&
        <Stats user1Stats={user1Stats} user2Stats={user2Stats} />
      }
      
    </div>

  )
}