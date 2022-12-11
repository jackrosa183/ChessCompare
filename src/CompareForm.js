import React, { useState } from 'react';

export default function CompareForm() {
  // Declare a new state variable, which we'll call "count"
  const [inputs , setInputs] = useState({
    user1: '',
    user2: '',
  })

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
    console.log(inputs)
  }

  const handleSubmit = (e) => {
    alert(`Submitting ${inputs.user1} ${inputs.user2}`)
  }

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
    </div>
  )
}