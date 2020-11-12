// const display = document.getElementById("data");

fetch("http://127.0.0.1:3000/api/timetable")
  .then((response) => response.json())
  .then((data) => {
    // Populate Subject Dropdown
    let dropdown = document.getElementById('subject-dropdown');
    dropdown.length = 0;

    let default_option = document.createElement('option');
    default_option.text = 'All Subjects';
    default_option.value = null;

    dropdown.add(default_option);
    dropdown.selectedIndex = 0;

    for (let i = 0; i < data.length; i++) {
      let option = document.createElement('option');
      option.text = data[i].subject;
      option.value = data[i].subject;
      dropdown.add(option);
    }

    // Fetch User Input
    var subject = document.getElementById('subject-dropdown');
    var campus = document.getElementById('campus');
    var start = document.getElementById('start_time');
    var end = document.getElementById('end_time');

    // Display Results
    function show_table() {
      let table = document.getElementById("my-table");
      table.innerHTML = '';
      for (var i = 0; i < 50; i++) {
        var row = `<tr class="table-row">
                      <td id="time">${filtered_data[i].course_info[0].start_time}  ${filtered_data[i].course_info[0].end_time}</td>
                      <td id="class">${filtered_data[i].className}</td>
                      <td id="subject">${filtered_data[i].subject}</td>
                      <td id="info">${filtered_data[i].course_info[0].campus}</td>
                      <td id="catalog">${filtered_data[i].catalog_description}</td>
                </tr>`;
        table.innerHTML += row;
      }
    }

    // Filter by Subject
    subject.onchange = function () {
      filtered_data = data.filter(subj => subj.subject == subject.value);
      console.log(filtered_data);
      show_table();
    }

    // Filter by Campus
    campus.onchange = function () {
      filtered_data = data.filter(camp => camp.course_info[0].campus == campus.value);
      console.log(filtered_data);
      show_table();
    }

    // Filter by Start Time
    start.onchange = function () {
      filtered_data = data.filter(sta => sta.course_info[0].start_time == start.value);
      console.log(filtered_data);
      show_table();
    }

    // Filter by End Time
    end.onchange = function () {
      filtered_data = data.filter(en => en.course_info[0].end_time == end.value);
      console.log(filtered_data);
      show_table();

    }

  }).catch(function (error) {
    console.log(error);
  });