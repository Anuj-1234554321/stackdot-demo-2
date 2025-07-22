const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const instituteRoutes = require('./routes/institute');
app.use('/api/institute', instituteRoutes);

const entityRoutes = require('./routes/entity');
app.use('/api/entity', entityRoutes);


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/stackdot-demo-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


module.exports = app;








