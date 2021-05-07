
const  orderLastname = (dataLastname)=>{
    // Copia el array recibido
    let arrayLastname = dataLastname;
    let volverAOrdenar = false;
    // Recorre el arrayLastname
    arrayLastname.forEach(function (valor, key) {
        // Comprueba si el primero es mayor que el segundo y no esta en la última posición
        if(arrayLastname[key+ 1] != undefined){
            if (arrayLastname[key].lastname.toUpperCase() > arrayLastname[key + 1].lastname.toUpperCase() && arrayLastname.length - 1 != key) {
                // Intercambia la primera posición por la segunda
                let primerNum = arrayLastname[key];
                let segundoNum = arrayLastname[key + 1];
                arrayLastname[key] = segundoNum;
                arrayLastname[key + 1] = primerNum;
                // Si debe volver a ordenarlo
                volverAOrdenar = true;
            }
        }
       
    });
    // Vuelve a llamar al función
    if (volverAOrdenar) {
        orderLastname(arrayLastname);
    }
    // ArrayLastname ordenado
    return arrayLastname;
}

module.exports = orderLastname;