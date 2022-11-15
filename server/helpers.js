const idGen = async () => {
  const randomizedIds = {};
  while (Object.keys(randomizedIds).length < 10) {
    const randomSneakerId = Math.floor(Math.random() * (506 - 1) + 1);
    if (!randomizedIds[randomSneakerId]) {
      randomizedIds[randomSneakerId] = 1;
    }
  }
  const mappedIds = Object.keys(randomizedIds).map((each) => {
    return each;
  });
  return mappedIds;
}

module.exports = idGen;