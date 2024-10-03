const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/mern_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
