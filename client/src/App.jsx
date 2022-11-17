import React, { useState, useEffect } from 'react';
// import * as React from 'react';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';
import Play from './components/Play.jsx';
import Score from './components/Score.jsx';
import * as Styles from './styles.js';
import styled from 'styled-components';

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
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <AppContainer>
        {(tries === '-1') ?
          <WelcomeContainer>
            <TitleContainer>
              SNEAKERHEAD?
            </TitleContainer>
            <FormContainer>
              <Welcome setTried={ setTried } />
            </FormContainer>
          </WelcomeContainer>
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

    </AppContainer>
  )
}

export default App;


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 50vw;
`

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

const TitleContainer = styled.h1`
  align-items: center;
  justify-content: center;
  padding: 5em;
`
const WelcomeContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 100vh;
width: 50vw;
`