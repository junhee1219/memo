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
  
  // Promise 객체 생성
  var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                resolve(xhr.responseText); // 성공
            } else {
                reject(xhr.status); // 실패
            }
        }
    };
    xhr.send(params);
  });

  // Promise 객체 처리
  promise.then(function(response) {
      // 응답 성공
      var result = JSON.parse(response);
      alert("저장되었습니다.");
  }, function(status) {
      // 응답 실패
      alert("저장실패");
  });
}