
let encrip = document.getElementById("encriptar");
               encriptar.addEventListener("click", encriptartx);
let desencrip = document.getElementById("desencriptar");
               desencriptar.addEventListener("click", desencriptartx);

function encriptartx(){
    let texto = document.getElementById("texto").value.toLowerCase();
    if (texto != ""){
    let textofinal = texto.replace(/e/img, "emter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/ufat/img, "ugat");
    document.getElementById("cuadroResultado").innerHTML = ""

    document.getElementById("textoTransformado").innerHTML = textofinal;
    }
}
    



function desencriptartx(){
    let texto = document.getElementById("texto").value.toLowerCase();
    if (texto != ""){
    let textofinal = texto.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u");
    document.getElementById("cuadroResultado").innerHTML =""

    document.getElementById("textoTransformado").innerHTML = textofinal;
   }
}


