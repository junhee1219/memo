var xhr = new XMLHttpRequest();
var queryString = window.location.search;
var data = new URLSearchParams(queryString);
var code = data.get("CODE");
var timer = null;

$('memoArea').on('keyup', function() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(fnSave, 5000);
});

$(document).ready(function() {
  init();
});

function init() {
  console.log(code)
  var url = "http://1.234.198.25:9090/api/init";
  var params = "CODE=" + (code);
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
            $("#memoArea").val(response.message)               
      }
  };
  xhr.send(params);
}

function fnSave(){
  var url = "http://1.234.198.25:9090/api/save";
  var memo = $("#memoArea").val();
  var params = "CODE=" + code + "&MEMO=" + memo ;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          alert("저장되었습니다.");
      }
      else{
        alert("저장실패");
      }
  };
  xhr.send(params);
}

