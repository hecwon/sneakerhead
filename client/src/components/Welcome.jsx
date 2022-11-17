import React, { useState } from 'react';

const Welcome = ({ setTried, startGame }) => {
  const [userInfo, setUserInfo] = useState({
    username: null,
    name: null,
    email: null
  });
  const handleChange = (property, input) => {
    userInfo[property] = input;
    setUserInfo({...userInfo});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Play button clicked');
    setTried('0');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username*
        <br />
        <input type="text" name="username" required onChange={(e) => {handleChange(e.target.name, e.target.value)}} />
        <br />Name*<br />
        <input type="text" name="name" required onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
        <br />Email<br />
        <input type="text" name="email" onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
        <br />
        <button type="submit">PLAY</button>
      </form>
      <div>
        <h3>Hello! How much of a sneakerhead are you? Let's find out!</h3>
        <br />
        <h4>Rules</h4>
        <br />
        1. Get the details of the shoe right.
        <br />
        2. Get all 10 shoes right, including their release year & formal release name (bred is ok) to get a perfect score of <b>10,000</b>.
        <br />
        3. Flex on 'em
        <br />
      </div>
    </div>
  )
}

export default Welcome;