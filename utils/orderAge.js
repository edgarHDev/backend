
 const  orderAge = (dataAge)=>{
    // Copia el array recibido
    let array = dataAge;
    let volverAOrdenar = false;
    // Recorre el array
    array.forEach(function (valor, key) {
        // Comprueba si el primero es mayor que el segundo y no esta en la última posición
        if(array[key+ 1] != undefined){
            if (array[key].age > array[key + 1].age && array.length - 1 != key) {
                // Intercambia la primera posición por la segunda
                let primerNum = array[key];
                let segundoNum = array[key + 1];
                array[key] = segundoNum;
                array[key + 1] = primerNum;
                // Si debe volver a ordenarlo
                volverAOrdenar = true;
            }
        }
       
    });
    // Vuelve a llamar al función
    if (volverAOrdenar) {
        orderAge(array);
    }
    // Array ordenado
    return array;
}
module.exports = orderAge;
