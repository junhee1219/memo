function login() {
    var CODE = $("#CODE").val();

    if (CODE === "") {
        alert("코드를 입력하세요");
        return false;
    }
    window.location.href = "main.html?CODE="+CODE;

    return true;
}
