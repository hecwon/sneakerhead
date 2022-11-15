require('dotenv').config();
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect(`mongodb://${process.env.HOST}:27017/sneakers`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const sneakerSchema = new mongoose.Schema({
  id: {type: Number, index: true},
  gender: {type: String},
  name: {type: String},
  shoe: {type: String},
  year: {type: Number},
  retail: {type: Number},
  picture: {type: String}
});

sneakerSchema.plugin(AutoIncrement, {inc_field: 'id'});
const sneakerModel = mongoose.model('Sneaker', sneakerSchema);

module.exports = sneakerModel;