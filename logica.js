
 function EncriptarTexto(){

    var textArea = document.getElementById("textarea").value;

    if(textArea != ""){

      const newtx = textArea;
      console.log(newtx);
  
      var textencriptado = newtx.replace(/[aeiou]/gi, function(letra) {
        switch (letra.toLowerCase()) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
          default:
            return letra;
        }
      });
      
      console.log(textencriptado);
      textarea.value ="";
      mensaje.style.backgroundImage ="none";
      mensaje.value = textencriptado; 

    }

}


function DescriptarTxto(){

    let mensage = document.getElementById("mensaje").value;

    if(mensage !=""){

      var newtx = mensage;
    

      var txDescriptar = newtx.replace(/ai|enter|imes|ober|ufat/gi, function(letra) {
        switch (letra.toLowerCase()) {
          case 'ai':
            return 'a';
          case 'enter':
            return 'e';
          case 'imes':
            return 'i';
          case 'ober':
            return 'o';
          case 'ufat':
            return 'u';
          default:
            return letra;
        }
      });
      
      mensaje.value = "";
      mensaje.style.backgroundImage = "url('img/Muñeco.png')";
      textarea.value = txDescriptar;

    }


}

function copiarCliboard(){

  let mensage = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(mensage);


}