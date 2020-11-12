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
    var subject_dis = document.getElementById('subject_dis');
    var campus_dis = document.getElementById('campus_dis');
    var start_dis = document.getElementById('start_dis');
    var end_dis = document.getElementById('end_dis');

    // Filter by Subject
    subject.onchange = function () {
      filtered_data = data.filter(subj => subj.subject == subject.value);
      subject_dis.innerHTML = subject.value;
      console.log(filtered_data);
    }

    // Filter by Campus
    campus.onchange = function () {
      filtered_data = filtered_data.filter(camp => camp.course_info[0].campus == campus.value);
      campus_dis.innerHTML = campus.value;
      console.log(filtered_data);
    }

    // Filter by Start Time
    start.onchange = function () {
      filtered_data = filtered_data.filter(sta => sta.course_info[0].start_time == start.value);
      start_dis.innerHTML = start.value;
      console.log(filtered_data);
    }

    // Filter by End Time
    end.onchange = function () {
      filtered_data = filtered_data.filter(en => en.course_info[0].end_time == end.value);
      end_dis.innerHTML = end.value;
      console.log(filtered_data);
    }

  }).catch(function (error) {
    console.log(error);
  });