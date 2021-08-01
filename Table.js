var insert = document.getElementById('insertitem');
insert.addEventListener('click', function() {
  var table = document.getElementById('insertfirsttable'),
    con = prompt("Enter the country"),
    medals = prompt("Enter number of medals");

  for (var r = 0; r < 1; r += 1) {
    var x = document.getElementById('insertfirsttable').insertRow(r);
    for (var c = 0; c < 2; c += 1) {
      var y = x.insertCell(c);
    }

    table.rows[r].cells[0].innerHTML = con;
    table.rows[r].cells[1].innerHTML = medals;
    
  }
   
  });