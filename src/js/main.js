import $ from 'jquery'

function processData (data) {
  console.log(data);
    // loop over the data
  var header= `<header id="head">Sign Up For My Web App</header>`;
  $("#myform").append(header);
  for (var i = 0; i < data.length; i++) {
  // generate html for each thing in data
    if (data[i].label === "Select Language") {
      var inputHTML = `
      <p>
      <select class="dropmenu" name="select">
      <option value="" disabled selected style="display: none;">${data[i].label}</option>
      <option value="value1">${data[i].options[0].label}</option>
      <option value="value2">${data[i].options[1].label}</option>
      <option value="value3">${data[i].options[2].label}</option>
      <option value="value4">${data[i].options[3].label}</option>
      <option value="value5">${data[i].options[4].label}</option>
      </select>
      <p>
          `;
    }
    else {
    var inputHTML = `
    <p><input class="form" type="text" placeholder="${data[i].label}"><p>
    `;
    };
    $("#myform").append(inputHTML);
  };
  var foot = `
    <div class="footer">
      <button class="submit" type="button" name="button">Submit Form</button>
    </div>
  `;
    $("#myform").append(foot);
};


function renderForm () {
  var info = $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    success: processData
  });
  console.log(info);
};

// var test = $.getJSON(info);
//
// console.log(test);

renderForm()
