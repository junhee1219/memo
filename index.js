function login() {
    var username = $("#username").val();
    var password = $("#password").val();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    var xhr = new XMLHttpRequest();
    var url = "http://1.234.198.25:9090/api/login";
    var params = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response)
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
