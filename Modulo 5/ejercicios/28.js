function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

  return "Que bien se te ve " + nombre + "!"; 
}
console.log(obtenerSaludo("Matias"));

module.exports = obtenerSaludo;