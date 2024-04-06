function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

     // Iteramos sobre cada elemento del arreglo
    for (let i = 0; i < array.length; i++) {
      // Verificamos si el elemento en la posición actual es una cadena
      if (typeof array[i] === 'string') {
        // Si es una cadena, la convertimos a mayúsculas usando toUpperCase()
        array[i] = array[i].toUpperCase();
      }
    }
    // Devolvemos el arreglo modificado
    return array;
  }

let strings = ["roberta", "medita", "tranquila"];

console.log(convertirStringAMayusculas(strings));

module.exports = convertirStringAMayusculas;
