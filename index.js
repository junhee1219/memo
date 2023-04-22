function login() {
    var CODE = $("#CODE").val();

    if (CODE === "") {
        alert("코드를 입력하세요");
        return false;
    }
    var data = {
        CODE: CODE,
      };
    var queryString = new URLSearchParams(data).toString();
    window.location.href = "main.html?"+queryString;

    return true;
}