const magazin = [];
magazin.push(createProduse("mere", 10, 50));
magazin.push(createProduse("paine", 5, 100));
magazin.push(createProduse("lapte", 5, 200), createProduse("carne", 100, 40));
magazin.push(
  createProduse("bomboane", 3, 600),
  createProduse("cheese", 20, 60)
);

let cosCumparaturi = [];
let totalCost = 0;
let cosCumparaturiFinal = [];
createCos(magazin);
addProduct(magazin);
removeProducts(2);
totalCost = totalCos(cosCumparaturi);
console.log("Pretul cosului este de: " + totalCost + " lei");
cosCumparaturiFinal = checkout(cosCumparaturi);
console.log(cosCumparaturiFinal);

function createProduse(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
  };
}

function createCos(produs) {
  cosCumparaturi.push(produs[1], produs[3], produs[0]);
  console.log(cosCumparaturi);
}

function addProduct(produs) {
  cosCumparaturi.push(produs[5]);
  cosCumparaturi.splice(2, 0, produs[4]);
  console.log(cosCumparaturi);
}

function removeProducts(num) {
  cosCumparaturi.splice(num, 1);
  console.log(cosCumparaturi);
}

function totalCos(cos) {
  let totalPrice = 0;
  for (let key in cos) {
    totalPrice += cos[key].price;
  }

  return totalPrice;
}

function checkout(cos) {
  let arrFinal = [];
  totalQuantity = 0;
  let productList = [];
  for (let key in cos) {
    totalQuantity += cos[key].quantity;
    console.log(cos[key].name);
    productList.push(cos[key].name);
  }

  arrFinal.push(totalCost, totalQuantity, productList, "Succesful transaction");

  return arrFinal;
}
