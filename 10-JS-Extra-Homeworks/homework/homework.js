// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      (key) D: 1, (valor)
      B: 2,
      C: 3 
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var arr=[];
for (const key in objeto) {
  arr.push([key,objeto[key]])//objeto[key] representa el valor de la key de objeto
}
return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> {} a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto={};
  for(var i=0; i<string.length;i++){
    if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]]=objeto[string[i]] + 1;
    }
    else{
      objeto[string[i]]= 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var mayus= "";
 var minus= "";
  for(var i=0;i<s.length;i++){
    if(s[i]=== s[i].toUpperCase()){
      mayus= mayus + s[i]
    }else{
     minus= minus + s[i]
    }
  }
  var nuevas=mayus + minus
  return nuevas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc" es "!|e|s|o|l|c| |s|i| |e|g|n|e|l|l|a|h|C| |y|r|n|e|H| |e|h|T|'
  //Escribe tu código aquí
  var espejo = '';
  for(let i = str.length -1; i >= 0; i--) {
      espejo += str[i];
    };
  return espejo.split(' ').reverse().join(' ');// la existencia/inexsitencia de un espacio entre las comillas tiene repercucion en el resultado
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var strnum=numero.toString()
  var reverse = '';
  for(let i = strnum.length -1; i >= 0; i--) {
      reverse += strnum[i];
    }
  if(strnum === reverse){
      return "Es capicua"
  }else{
     return "No es capicua"
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena="";
  for(var i=0; i<cadena.length; i++){
    if(!(cadena[i] ==="a" || cadena[i] === "b" || cadena[i] === "c")){
       nuevaCadena+=cadena[i].split("")
    }
  }
    return nuevaCadena;
}
/// |j|u|a|n| |e|s| |u|n|  | g|r |a |n |  |p |r |o|g|r|a|m|a|d|o|r|
/// |0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking", "8" ,"7"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //                   0 3     1 3      2 9           3 7
  //Escribe tu código aquí
  var cambio= true;
  while(cambio){
    cambio= false;
    for(var i=0;i<arr.length-1;i++){
        if(arr[i].length > arr[i+1].length){
        var aux=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=aux;
        cambio=true
      }  
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 número s. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = nuevo=[3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí :
  var arrNu=[];
  for(var i=0;i<arreglo1.length;i++){
     for(var x=0;x<arreglo2.length;x++){
      if(arreglo1[i] === arreglo2[x]){
        arrNu.push(arreglo1[i])
      }
     }
  }
  return arrNu;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

