const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routes/UserRoutes');

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter)

// Connect to MongoDB
mongoose.connect(
  // mongoURI, 
  "mongodb://root:example@localhost:27017",
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app