const data= "data/degrees.json"

/* The function */

function json2table(json, classes) {
    const cols = Object.keys(json[0]);


    let headerRow = '';
    let bodyRows = '';


    classes = classes || '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cols.map(function(col) {
        headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });

    json.map(function(row) {
        bodyRows += '<tr>';

        cols.map(function(colName) {
            bodyRows += '<td>' + row[colName] + '</td>';
        })

        bodyRows += '</tr>';
    });

    return '<table class="' +
        classes +
        '"><thead><tr>' +
        headerRow +
        '</tr></thead><tbody>' +
        bodyRows +
        '</tbody></table>';
}


document.getElementById('degrees').innerHTML = json2table(data, 'table');

/* Live example */

const dom = {
    table: document.getElementById('degrees'),
};

dom.data.value = JSON.stringify(data);
dom.data.addEventListener('input', function() {
    dom.table.innerHTML = json2table(JSON.parse(dom.data.value), 'table');
});
