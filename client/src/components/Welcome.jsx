import React, { useState } from 'react';

const Welcome = ({ setForm }) => {
  const [userInfo, setUserInfo] = useState({
    username: null,
    name: null,
    email: null
  });
  const handleChange = (property, input) => {
    userInfo[property] = input;
    setUserInfo({...userInfo});
    console.log('updated userInfo: ', userInfo);
  }
  const handleSubmit = () => {
    setForm('play');
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
    </div>
  )
}

export default Welcome;