const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  let aux = [];
  aux.push(this.value);
  if (!this.left && !this.right) return this.value;
  if (this.left) aux.push(this.left.searchMaxTwo());
  if (this.right) aux.push(this.right.searchMaxTwo());
  return aux
    .flat(Infinity)
    .sort((a, b) => b - a)
    .splice(0, 2);
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
