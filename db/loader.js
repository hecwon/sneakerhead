const {shoes} = require('./sneakerdata.js');
const sneakerModel = require('./index.js');

console.log('sneakerModel: ', sneakerModel);

for (var i = 5; i < shoes.length; i++) {
  let currShoe = shoes[i];
  if (currShoe.name.indexOf('(PS)') === -1 && currShoe.name.indexOf('(TD)') === -1 && currShoe.name.indexOf('(GS)') === -1) {
    const entry = {
      gender: currShoe.gender,
      name: currShoe.name,
      shoe: currShoe.shoe,
      year: currShoe.year,
      retail: currShoe.retailPrice,
      picture: currShoe.media.imageUrl
    }
    var newEntry = new sneakerModel(entry);
    newEntry.save()
      .then(() => {
        console.log(`${currShoe.name} successfully saved`);
      })
      .catch((err) => {
        console.log('Hector error: ', err);
      });
  }
}
