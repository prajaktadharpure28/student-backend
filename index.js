const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();

app.use(express.json());

const PORT = 5000;

mongoose.connect('mongodb+srv://suraj:suraj@cluster0.gfb4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('hello world');
})

// app.get('/home', (req, res) => {
//     res.send('home route');
// })


app.post('/add/student', (req, res) => {
   const student = {
       name: req.body.name,
       age: req.body.age,
       roll: req.body.roll
   }
   const newStudent = new Student(student);
   newStudent.save((err, data) => {
       if(err) {
           console.log(err);
       } else {
           res.json(data);
       }
   })
   })
     
// app.post('/subject', (req, res) => {
//     console.log(req.body);
//     res.send({
//         status: 'success',
//     });
// })

// app.post('/about', (req, res) => {
//     res.send('about route');
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});