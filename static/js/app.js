// from data.js
var tableData = data;
var tbody = d3.select("tbody");
//append rows to table from data
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
//detect changes in form value
var dateForm = d3.select('#datetime');
function handleChange(event) {
    var inputDate = d3.event.target.value;
    console.log('User searched for '+ inputDate);
};
dateForm.on("change",handleChange);

//create filtered array when user clicks filter button
var button = d3.select("#filter-btn")
button.on("click", function(){
    var inputDate = dateForm.property("value");
    var filteredData = data.filter(ufoReport => ufoReport.datetime == inputDate);
    // display only filtered data
    if(filteredData.length !== 0) {
        d3.select("tbody").selectAll("tr").remove();
        filteredData.forEach((ufoReport) => {
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value)
            });
        });
    } else {
        console.log("no records found");
    }
});

// reset button after search cleared
var resetButton = d3.select("#reset-btn")
resetButton.on("click",function(){
    d3.select("tbody").selectAll("tr").remove();
    data.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});
