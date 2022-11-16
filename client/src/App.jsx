import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';
import Play from './components/Play.jsx';

const App = () => {
  const [tries, setTried] = useState('-1');
  const page = JSON.parse(tries);
  console.log('page: ', page);

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

  return (
    <>
    {(tries === '-1') ? <Welcome setTried={ setTried } /> : null }
    {(page < 10 && page >= 0) ? <Play page={page} shoe={ shoes[page] } setTried={ setTried } /> : null }
    </>
  )
}

export default App;