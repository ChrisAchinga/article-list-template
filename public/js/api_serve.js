const display = document.getElementById("data");

fetch("http://localhost:3000/api/timetable")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    let table = document.getElementById("my-table");
    for (var i = 0; i < 50; i++) {
      var row = `<tr>
                      <td>${data[i].course_info[0].start_time}  ${data[i].course_info[0].end_time}</td>
                      <td>${data[i].className}</td>
                      <td>${data[i].subject}</td>
                      <td>${data[i].course_info[0].campus}</td>
                      <td>${data[i].catalog_description}</td>
                </tr>`
      table.innerHTML += row;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// function gUser() {
//   fetch("users.json")
//     .then((res) => res.json())
//     .then((data) => {
//       let output = "<h2>Users</h2>";
//       data.forEach(function (user) {
//         output += `
//             <ul class="list-group mb-3">
//                 <li class="list-group-item">ID: ${user.id} </li>
//                 <li class="list-group-item">Name: ${user.name} </li>
//                 <li class="list-group-item">Email: ${user.email} </li>
//             </ul>
//             `;
//       });
//       document.getElementById("output").innerHTML = output;
//     });
// }
