
let encrip = document.getElementById("encriptar");
               encriptar.addEventListener("click", encriptartx);
let desencrip = document.getElementById("desencriptar");
               desencriptar.addEventListener("click", desencriptartx);

function encriptartx(){
    let texto = document.getElementById("texto").value.toLowerCase();
    if(texto == ""){
        document.getElementById("cuadroResultado").innerHTML = "";
        document.getElementById("textoTransformado").innerHTML = '<img src="imagenes/Muñeco.png" alt="hombre con lupa">'+ '<h1 style="color: black;">Ningún mensaje fue encontrado</h1>'+'<h2 style="color: black;"> Ingrese el texto que desees encriptar o desencriptar</h2>'    
    }

    if (texto != ""){
        let textofinal = texto.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat");
        document.getElementById("cuadroResultado").innerHTML = "";

        document.getElementById("textoTransformado").innerHTML = textofinal;
    }
}
    



function desencriptartx(){
    let texto = document.getElementById("texto").value.toLowerCase();
    if(texto == ""){
        document.getElementById("cuadroResultado").innerHTML = "";
        document.getElementById("textoTransformado").innerHTML = '<img src="imagenes/Muñeco.png" alt="hombre con lupa">'+ '<h1 style="color: black;">Ningún mensaje fue encontrado</h1>'+'<h2 style="color: black;"> Ingrese el texto que desees encriptar o desencriptar</h2>'    
    }

    if (texto != ""){
        let textofinal = texto.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u");
        document.getElementById("cuadroResultado").innerHTML ="";

        document.getElementById("textoTransformado").innerHTML = textofinal;
   }
}


