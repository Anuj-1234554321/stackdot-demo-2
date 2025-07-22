const Board = require('../models/Board');

const Medium = require('../models/Medium');

const ClassCategory = require('../models/ClassCategory');

const Standard = require('../models/Standard');

const Subject = require('../models/Subject');

const University = require('../models/University');

const DegreeType = require('../models/DegreeType');

const ExamType = require('../models/ExamType');


exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMediums = async (req, res) => {
  try {
    const mediums = await Medium.find();
    res.json(mediums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getClassCategories = async (req, res) => {
  try {
    const categories = await ClassCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStandards = async (req, res) => {
  try {
    const standards = await Standard.find(req.query);
    res.json(standards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find(req.query);
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUniversities = async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getDegreeTypes = async (req, res) => {
  try {
    const degrees = await DegreeType.find();
    res.json(degrees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getExamTypes = async (req, res) => {
  try {
    const exams = await ExamType.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBoard = async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createMedium = async (req, res) => {
  try {
    const medium = new Medium(req.body);
    await medium.save();
    res.status(201).json(medium);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createClassCategory = async (req, res) => {
  try {
    const category = new ClassCategory(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createStandard = async (req, res) => {
  try {
    const standard = new Standard(req.body);
    await standard.save();
    res.status(201).json(standard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createUniversity = async (req, res) => {
  try {
    const university = new University(req.body);
    await university.save();
    res.status(201).json(university);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createDegreeType = async (req, res) => {
  try {
    const degree = new DegreeType(req.body);
    await degree.save();
    res.status(201).json(degree);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createExamType = async (req, res) => {
  try {
    const exam = new ExamType(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
