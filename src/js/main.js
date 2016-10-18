import $ from 'jquery'

function processData (data) {
  var header= `<header id="head">Sign Up For My Web App</header>`;
  $("#myform").append(header);
  var inputArray=[];
  for (var i = 0; i < data.length; i++) {
    if (data[i].label === "Select Language") {
      var inputHTML = `
      <div class="inputLine">
      <select class="dropmenu" name="select">
      <option value="" disabled selected style="display: none;">Select language...</option>
      <option value="value1">${data[i].options[0].label}</option>
      <option value="value2">${data[i].options[1].label}</option>
      <option value="value3">${data[i].options[2].label}</option>
      <option value="value4">${data[i].options[3].label}</option>
      <option value="value5">${data[i].options[4].label}</option>
      </select>
      </div>
          `;
    } else if (data[i].label === "Your Comment") {
      var inputHTML = `
      <div class="inputLine">
      <i class="fa ${data[i].icon}"></i>
      <textarea class="form" id="${data[i].id}" placeholder="${data[i].label}"></textarea>
      </div>`
    } else {
    var inputHTML = `
    <div class="inputLine">
    <i class="fa ${data[i].icon}"></i>
    <input class="form" id="${data[i].id}" type="text" placeholder="${data[i].label}">
    </div>
    `;
    };

    $("#myform").append(inputHTML);
    };

  var foot = `
    <div class="footer">
      <button class="submit" type="button" name="button">Submit Form</button>
    </div>
  `;
    $("#submitbar").append(foot);
};

function renderForm () {
  var info = $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    success: processData
  });
};

renderForm()
