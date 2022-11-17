import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';
import Play from './components/Play.jsx';
import Score from './components/Score.jsx';

const App = () => {
  const [tries, setTried] = useState('-1');
  const page = JSON.parse(tries);
  console.log('page: ', page);

  const [scorecard, setScorecard] = useState([]);

  const handleScorecard = (entry) => {
    const newScorecard = [...scorecard, entry];

    setScorecard(newScorecard);
    console.log('updated scorecard: ', scorecard);
  }

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('/sneakers')
    .then((result) => {
      // shoes = result.data;
      setShoes(result.data);
      console.log('shoes: ', shoes);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  console.log('shoes: ', shoes);

  // replace line 40 with {(page < 10 && page >= 0) ?
  return (
    <>
    {(tries === '-1') ? <Welcome setTried={ setTried } /> : null }

    {(page < 10 && page >= 0) ?
      <Play
        page={page}
        shoe={ shoes[page] }
        setTried={ setTried }
        handleScorecard={handleScorecard}
      />
    : null }
    {/* changed page from 10 */}
    {(page >= 2) ?
      <Score scorecard={scorecard} shoes={shoes} />
    : null }
    </>
  )
}

export default App;