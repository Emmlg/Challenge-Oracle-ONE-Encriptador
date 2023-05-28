
 function EncriptarTexto(){

    let texto = document.getElementById("textEncriptador");
    var newtx = texto.value;
    

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

textdesencriptador.value = textencriptado;



}


function DescriptarTxto(){

    let texto = document.getElementById("textdesencriptador");
    var newtx = texto.value;
    

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

textEncriptador.value = txDescriptar;



}