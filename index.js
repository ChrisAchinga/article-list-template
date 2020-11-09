const express = require("express");
const path = require("path");
const timetable = require('./Timetable');

const app = express();
const PORT = process.env.PORT || 3000;


// api
app.get('/api/timetable', (req, res) => {
    res.json(timetable)
})

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
