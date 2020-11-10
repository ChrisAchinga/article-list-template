// const display = document.getElementById("data");

fetch("http://localhost:3000/api/timetable")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    let table = document.getElementById("my-table");
    for (var i = 0; i < 50; i++) {
      var row = `<tr class="table-row">
                      <td id="time">${data[i].course_info[0].start_time}  ${data[i].course_info[0].end_time}</td>
                      <td id="class">${data[i].className}</td>
                      <td id="subject">${data[i].subject}</td>
                      <td id="info">${data[i].course_info[0].campus}</td>
                      <td id="catalog">${data[i].catalog_description}</td>
                </tr>`;
      table.innerHTML += row;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

let filterInput = document.getElementById("myInput");

filterInput.addEventListener("keyup", filterTable);

function filterTable() {
  // console.log(2)
  // input value
  let filterValue = document.getElementById("myInput").value.toUpperCase();
  // console.log(filterValue);
      // Get the table
      let table = document.getElementById('my-table');
      // Get table rows
      let tr = table.querySelectorAll('tr.table-row');

      // Loop through collection-item lis
      for(let i = 0;i < tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[0];
        // If matched
        if(td.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
}
