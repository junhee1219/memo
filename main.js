const saveButton = document.getElementById("save-button");
const memoTextarea = document.getElementById("memo");

$(document).ready(function() {
  init();
});

function init() {
  var xhr = new XMLHttpRequest();
  var url = "http://1.234.198.25:9090/api/login";
  var params = "CODE=" + encodeURIComponent(CODE);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.result == "SUCCESS"){
            memo.text(response.message)
              }
          else{
              console.log("FAIL")
          }
      }
  };
  xhr.send(params);
}


saveButton.addEventListener("click", function () {
  const memo = memoTextarea.value;
  localStorage.setItem("memo", memo);
  alert("Your memo has been saved!");
});

const memo = localStorage.getItem("memo");
if (memo !== null) {
  memoTextarea.value = memo;
}

