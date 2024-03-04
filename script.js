function github() {
    window.open('https://github.com/itsuigy/Manejo-de-Eventos');
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "root" && password === "root") {
        return true;
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}