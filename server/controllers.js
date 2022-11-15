const idGen = require('./helpers.js');
const sneakerModel = require('../db/index.js');

exports.getSneakers = async (req, res) => {
  var response = [];
  const ids = await idGen();
  console.log(ids);
  for (var id = 0; id < 10; id++) {
    await sneakerModel.find({id: ids[id]})
      .then((result) => {
        response = response.concat(result);
      })
      .catch((err) => {
        console.log(err);
        res.send('Could not get sneakers from DB');
      })
  }
  res.send(response);
}