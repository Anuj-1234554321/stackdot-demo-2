const mongoose = require('mongoose');
 
  const StandardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCategory' }
});
  module.exports = mongoose.model('Standard', StandardSchema);
