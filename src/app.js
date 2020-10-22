const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const students = [];


app.get('/students', (request, response) => {
  return response.json(students);
})

app.post('/students', (request, response) => {
  const { name, age, gender } = request.body;

  const student = { id: uuid(), name: name, age: age, gender: gender };

  students.push(student);

  return response.json(student);
})

app.put('/students/:id', (request, response) => {
  const { name, age, gender } = request.body;
  const { id } = request.params;

  const studentIndex = students.findIndex(student => student.id === id);

  if (studentIndex < 0)
    return response.status(400).json({ message: 'Student not found!' });

  const student = { id: id, name: name, age: age, gender: gender };

  students[studentIndex] = student;

  return response.json({ message: 'student successfully registered!' });
})

app.delete('/students/:id', (request, response) => {
  const { id } = request.params;

  const studentIndex = students.findIndex(student => student.id === id);

  if (studentIndex < 0)
    return response.status(400).json({ message: 'Student not found!' });

  students.splice(studentIndex, 1);

  return response.json({ message: "student successfully deleted!" })
})



app.listen(4444, () => {
  console.log('Back-end online');
})