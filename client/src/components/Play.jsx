import React, { useState } from 'React';

const Play = () => {
  const [guess, setGuess] = useState({
    year: null,
    name: null,
    shoe: null,
  })
  const handleGuess = (input, property) => {
    guess[property] = input;
    setGuess({...guess});
  }
  const targetShoe = axios.get('/sneaker')
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })

  return (
    <div>

    </div>
  )
}