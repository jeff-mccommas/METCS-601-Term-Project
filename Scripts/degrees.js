const data= "data/degrees.json"

/* The function */
//var mydegrees = [];
// $(function() {


//     // $.getJSON('https://github.com/typicode/json-server/blob/master/routes.json', function(data) {
//     //    alert("AAA") ;
//     //     mydegrees=JSON.parse(data.data);
//     //     console.log(mydegrees);
//     // });

//     var txtFile = "D:/degrees.json";
//     var file = new File([""],txtFile);
    
//     file.open("r"); // open file with read access
//     var str = "";
//     while (!file.eof) {
//         // read each line of text
//         str += file.readln() + "\n";
//     }
//     file.close();
//     alert(str);
 
//  });

function CreateTableFromJSON() {
    let i;
  
    // var mydegrees = JSON.parse(data);;
    // console.log("ddddddddddddddddddddddd"+data);
    // var mydegrees = [
    //     {
    //         "Book ID": "1",
    //         "Book Name": "Computer Architecture",
    //         "Category": "Computers",
    //         "Price": "125.60"
    //     },
    //     {
    //         "Book ID": "2",
    //         "Book Name": "Asp.Net 4 Blue Book",
    //         "Category": "Programming",
    //         "Price": "56.00"
    //     },
    //     {
    //         "Book ID": "3",
    //         "Book Name": "Popular Science",
    //         "Category": "Science",
    //         "Price": "210.40"
    //     }
    // ]
    // EXTRACT VALUE FOR HTML HEADER.
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (i = 0; i < mydegrees.length; i++) {
        for (var key in mydegrees[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (i = 0; i < mydegrees.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = mydegrees[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    const divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
