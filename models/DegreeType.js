const mongoose = require('mongoose');

  const DegreeTypeSchema = new mongoose.Schema({
  name: { type: String, required: true }
});
 module.exports = mongoose.model('DegreeType', DegreeTypeSchema);
