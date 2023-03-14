function demo() {
    var input = document.getElementById("fullname");
    var name = input.value;
    var result = "3, " + name + "!";
    var h = document.getElementById("result-content");
    h.innerHTML = result;
}
