function login() {
    var CODE = $("#CODE").val();

    if (CODE === "") {
        alert("코드를 입력하세요");
        return false;
    }

    var xhr = new XMLHttpRequest();
    var url = "https://1.234.198.25:5000/api/login";
    var params = "CODE=" + encodeURIComponent(CODE);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            alert(response)
            alert(response.CODE)
            if (response.result == "SUCCESS"){
                window.location.href = "main.html";}
            else{
                console.log("FAIL")
            }
        }
    };
    xhr.send(params);

    return true;
}
