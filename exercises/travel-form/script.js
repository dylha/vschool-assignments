function data() {
    document.getElementById('send').onclick = function (e) {
        alert(document.getElementById("name").value);
        return false;
    }
}

alert(data);