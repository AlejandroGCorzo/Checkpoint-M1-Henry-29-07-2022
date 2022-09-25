// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, object) {
  // Tu código acá
  for (const key in object) {
    array.push(object[key]);
  }
  function sorteadita(array) {
    let pivot = array[array.length - 1];
    if (array.length < 1) return array;
    let left = [];
    let right = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (pivot > array[i]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return [...sorteadita(left), pivot, ...sorteadita(right)];
  }
  array = sorteadita(array);
  return array;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
