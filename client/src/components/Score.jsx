import React, { useState } from 'react';

const Score = ( {scorecard, shoes } ) => {
  const totalPoints = 40
  let userPoints = 0;
  console.log('scorecard: ', scorecard);
  for (var i = 0; i < shoes.length; i++) {
    if (scorecard[i].year === shoes[i].year.toString()) {
      userPoints++;
    }
    if (scorecard[i].name === shoes[i].name) {
      userPoints++;
    }
    if (scorecard[i].shoe === shoes[i].shoe) {
      userPoints++;
    }
    if (scorecard[i].model === shoes[i].model) {
      userPoints++;
    }
    if (scorecard[i].gender === shoes[i].gender) {
      userPoints++;
    }
  }
  const percentCorrect = userPoints/totalPoints * 100;
  return (
    <>
    <h2>Score</h2>
      <p>Your score is {percentCorrect}%!</p>
      {(percentCorrect < 50) ? <div>No one said it would be easy...</div> : null}
      {(percentCorrect >= 50 && percentCorrect < 75) ? <div>Not bad, you know your stuff</div> : null}
      {(percentCorrect >= 75) ? <div>Wow, you really know your stuff. You must be an oldhead.</div> : null}
    </>
  )
}

export default Score;