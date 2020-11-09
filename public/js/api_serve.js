fetch('http://localhost:3000/api/timetable')
  .then(response => response.json())
  .then(data => console.log(data));