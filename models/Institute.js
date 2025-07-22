const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center'], required: true },

     board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  medium: { type: mongoose.Schema.Types.ObjectId, ref: 'Medium' },
  classCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCategory' },
     standards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Standard' }],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],

      university: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
  degreeType: { type: mongoose.Schema.Types.ObjectId, ref: 'DegreeType' },
  
  examType: { type: mongoose.Schema.Types.ObjectId, ref: 'ExamType' },

  createdAt: { type: Date, default: Date.now }
}); 



module.exports = mongoose.model('Institute', InstituteSchema);


  





