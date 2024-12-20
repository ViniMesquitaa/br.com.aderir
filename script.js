function telaLogin(){
    var telaLogin = document.getElementById("login-home")
    var telaHome = document.getElementById("main")
    var body = document.getElementById("body")

    telaLogin.style.display = "block"
    telaHome.style.display = "none"
    body.style.justifyContent = "end"
}

function voltarParaMain(){
    var telaLogin = document.getElementById("login-home")
    var telaHome = document.getElementById("main")
    var body = document.getElementById("body")

    telaLogin.style.display = "none"
    telaHome.style.display = "flex"
    body.style.justifyContent = "center"
}