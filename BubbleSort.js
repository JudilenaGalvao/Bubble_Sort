
let tam = [4,3,5,16,9,1]

var Bubble = function (array) {

  for(i = 0; i < tam.length; i++){
    for(j = 0; j < tam.length-i- 1; j++){
        if(tam[j] > tam[j+1]){
          let aux = tam[j+1];
          tam[j+1] = tam[j];
          tam[j] = aux;
        }
    }
  }

  console.log(tam)

}
Bubble(tam)
