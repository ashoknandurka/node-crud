const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  console.log("called /data api")
  // const payload = req
  // console.log("payload : ", payload)
  const data = req.body
  console.log("data is ", data)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


async function insertData() {
  const db = client.db('my-mongodb'); // Replace 'mydb' with your database name
  const collection = db.collection('test'); // Replace 'mycollection' with your collection name

  const dataToInsert = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  try {
    const result = await collection.insertOne(dataToInsert);
    console.log(`Inserted ${result.insertedCount} document`);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

// Call this function to insert data
// await insertData();

// async function closeConnection() {
//   try {
//     await client.close();
//     console.log('Connection to MongoDB closed');
//   } catch (error) {
//     console.error('Error closing connection:', error);
//   }
// }

// // Call this function to close the connection
// await closeConnection();
