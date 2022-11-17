import React, { useState } from 'react';

const Play = ({ page, shoe, setTried, handleScorecard }) => {
  const [guess, setGuess] = useState({
    year: '',
    name: '',
    model: '',
    gender: ''
  })
  const handleGuess = (input, property) => {
    guess[property] = input;
    setGuess({...guess});
  }
  const handleGender = (input) => {
    guess.gender = input;
    setGuess({...guess});
  }
  const handleNext = (e) => {
    e.preventDefault();
    handleScorecard(guess);
    setGuess({
      year: '',
      name: '',
      model: '',
      gender: ''
    });
    // event.target.reset();
    const nextPage = (page + 1).toString();
    setTried(nextPage);
  }

  return (
    <div>
      <img src={shoe.picture} />
      <form onSubmit={handleNext}>
        WHAT IS THE NAME OF THIS SHOE?
        <br />
        <input
          id="name"
          type="text"
          value={guess.name}
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />WHICH JORDAN IS THIS?<br />
        <input
          id="model"
          type="text"
          value={guess.model}
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />WHAT YEAR DID THIS SHOE RELEASE?<br />
        <input
          id="year"
          type="number"
          value={guess.year}
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
        <br />WAS THIS A MEN'S OR WOMEN'S SHOE?<br />
        <button type="button" id="Men" onClick={(e) => {handleGender(e.target.id)}}>Men</button>
        <button type="button" id="Women" onClick={(e) => {handleGender(e.target.id)}}>Women</button>
        <input
          id="gender"
          type="text"
          onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
        />
      {(page < 10) ?
        <button type="submit" >Next</button>
        : <button type="submit">See My Score</button>
      }
      </form>
    </div>
  )
}

export default Play;