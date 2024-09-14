function mejorPrecio(precio1, precio2, precio3) {
  if ((precio1<precio2) && (precio1<precio3)){
    return "Compra en la tienda 1"
  } else if ((precio2<precio3) && (precio2<precio1)){
    return "Compra en la tienda 2"
  } else {
    return "Compra en la tienda 3"
  }
}

console.log(mejorPrecio(500, 400, 450)); // "Compra en la tienda 2"
console.log(mejorPrecio(600, 700, 550)); // "Compra en la tienda 1"