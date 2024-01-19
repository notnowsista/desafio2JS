 function verificar(){
    const contrasena= document.querySelector('#numero1').value + 
                      document.querySelector('#numero2').value +
                      document.querySelector('#numero3').value;
    console.log(contrasena)

    if (contrasena === '911') {
        document.querySelector("#mensaje-final").innerHTML = "Password 1 es correcto";
    } else if (contrasena === '714'){
        document.querySelector("#mensaje-final").innerHTML = "Password 2 es correcto";
    }
    else{
        document.querySelector("#mensaje-final").innerHTML = "El password es incorrecto"
    }
}
