import React, { useState } from 'react';

const Play = ({ page, shoe, setTried, handleScorecard }) => {
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
    handleScorecard(guess);
    event.target.reset();
    const nextPage = (page + 1).toString();
    setTried(nextPage);
    console.log('next page is: ', nextPage);
  }

  return (
    <div>
      <img src={shoe.picture} />
      <form onSubmit={handleNext}>
        Name of Shoe
        <br />
        <input
          id="name"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />Shoe Model<br />
        <input
          id="model"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />Release Year<br />
        <input
          id="year"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />Gender<br />
        <input
          id="gender"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
      <button type="submit" >Next</button>
      </form>
    </div>
  )
}

export default Play;