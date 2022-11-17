import React, { useState } from 'react';
import { yearParser, nameParser, shoeParser, genderParser } from '../scoreParsers.js';

const Score = ( {scorecard, shoes } ) => {
  console.log('scorecard: ', scorecard);
  // changed line 7 scorecard from shoes
  let totalScore = 0;
  for (var i = 0; i < scorecard.length; i++) {
    console.log('input year: ', scorecard[i].year);
    const yearPoint = yearParser(scorecard[i].year, shoes[i].year) * 300;
    console.log('input name: ', scorecard[i].name);
    const namePoint = nameParser(scorecard[i].name, shoes[i].name) * 300;
    console.log('input shoe model: ', scorecard[i].model);
    const shoePoint = shoeParser(scorecard[i].model, shoes[i].shoe) * 300;
    console.log('input shoe: ', scorecard[i].gender);
    const genderPoint = genderParser(scorecard[i].gender, shoes[i].gender) * 100;
    console.log('yearPoint: ', yearPoint, ', namePoint: ', namePoint, ', shoePoint: ', shoePoint, ', genderPoint: ', genderPoint);
    totalScore = totalScore + yearPoint + namePoint + genderPoint + shoePoint;
  }
  console.log('total score: ', totalScore);
  const percentCorrect = totalScore/10000;

  return (
    <>
    <h2>Score</h2>
      <p>Your score is {totalScore}!</p>
      {(percentCorrect < 25) ? <div>Hmm. No one said it would be easy...</div> : null}
      {(percentCorrect < 50 && percentCorrect >= 25) ? <div>Okay, you know a little somethin'. Not bad!</div> : null}
      {(percentCorrect >= 50 && percentCorrect < 75) ? <div>Wow, you really know your stuff.</div> : null}
      {(percentCorrect >= 75) ? <div>You are a Certified Sneakerhead.</div> : null}
    </>
  )
}

export default Score;