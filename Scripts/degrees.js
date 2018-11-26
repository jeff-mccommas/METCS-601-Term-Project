
function ajaxClick() {
    //Setup the AJAX Call
    var xhttp = new XMLHttpRequest();
    const url = "http://www.bostonhc.com/data/degrees.json";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          displayResults(myArr);
      }
    }
  
    //Make AJAX Call
    xhttp.open("GET", url, true);
    xhttp.send();
  };
  
  function displayResults(arr) {
    //Setup Table
      let table = "<table><tr><th>School</th><th>Type</th><th>Url</th><th>Name</th><th>College</th><th>Year conferred</th><th>CollegeName</th></tr>";
      //var table = "<table><tr><th>Date</th><th>Production</th><th>Role</th></tr>";
    //Fill Table from JSON
    console.log("arrrrrrrrrrrrrrrrrrrrrrr"+arr);
    for (i in arr.my_roles) {
      table += "<tr>";
      table += "<td>" + arr.my_roles[i].role.school + "</td>";
      table += "<td>" + arr.my_roles[i].role.type + "</td>";
      table += "<td>" + arr.my_roles[i].role.url + "</td>";
      table += "<td>" + arr.my_roles[i].role.name + "</td>";
      table += "<td>" + arr.my_roles[i].role.college + "</td>";
      table += "<td>" + arr.my_roles[i].role.Yearconferred + "</td>";
      table += "<td>" + arr.my_roles[i].role.collegeName + "</td>";
      table += "</tr>";
    }
  
    table += "</table>";
  
    //Output Table to Correct Div
    document.getElementById("buttonDiv").style.display="none";
    document.getElementById("showData").innerHTML = table;
  }
  
