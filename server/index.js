const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const employeeSchema = new mongoose.Schema({
       id: String,
       name: String,
       position: String,
       kpiData: [Number],
});
     
const Employee = mongoose.model('Employee', employeeSchema);
     

     app.post('/employees', (req, res) => {
       const newEmployee = req.body;
       Employee.create(newEmployee)
         .then(() => {
           res.status(201).json({ message: 'Employee added successfully' });
         })
         .catch((error) => {
           console.error('Error adding employee:', error);
           res.status(500).json({ error: 'Internal server error' });
         });
     });

     app.get('/employees', (req, res) => {
       Employee.find()
         .then((employees) => {
           res.json(employees);
         })
         .catch((error) => {
           console.error('Error retrieving employees:', error);
           res.status(500).json({ error: 'Internal server error' });
         });
     });

     
     const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
