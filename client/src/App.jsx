import * as React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';
import Play from './components/Play.jsx';
import Score from './components/Score.jsx';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [tries, setTried] = useState('-1');
  const page = JSON.parse(tries);
  console.log('page: ', page);

  const [scorecard, setScorecard] = useState([]);

  const handleScorecard = (entry) => {
    const newScorecard = [...scorecard, (entry)];
    setScorecard(newScorecard);
  }

  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get('/sneakers')
    .then((result) => {
      // shoes = result.data;
      setShoes(result.data);
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <ChakraProvider>
      {(tries === '-1') ?
        <Welcome setTried={ setTried } />
      : null }
      {(page < 10 && page >= 0) ?
        <Play
          page={page}
          shoe={ shoes[page] }
          setTried={ setTried }
          handleScorecard={handleScorecard}
        />
      : null }

      {(page >= 10) ?
        <Score scorecard={scorecard} shoes={shoes} />
      : null }
    </ChakraProvider>
  )
}

export default App;
