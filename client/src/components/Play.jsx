import React, { useState } from 'react';

const Play = ({ page, shoe, setTried }) => {
  const [guess, setGuess] = useState({
    year: null,
    name: null,
    shoe: null,
  })
  const handleGuess = (input, property) => {
    guess[property] = input;
    setGuess({...guess});
  }
  const handleNext = (e) => {
    e.preventDefault();
    const nextPage = (page + 1).toString();
    setTried(nextPage);
    console.log('next page is: ', nextPage);
  }

  return (
    <div>
      <img src={shoe.picture} />
      <form onSubmit={handleNext}>
        Name of Shoe
        <input
          id="name"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        ></input>
        Shoe Model
        <input
          id="model"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        ></input>
      <button type="submit" >Next</button>
      </form>
    </div>
  )
}

export default Play;