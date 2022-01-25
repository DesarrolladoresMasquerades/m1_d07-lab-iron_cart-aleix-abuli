// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;

  const subtotalPrice = product.querySelector(".subtotal span")
  subtotalPrice.innerText = subtotal;
  return subtotal;
}
  

function calculateAll() {
  // ITERATION 2
  /*const productsArr = Array.from(document.getElementsByClassName("product"));

  productsArr.forEach((element) => {
    updateSubtotal(element)
    }
  );*/

  // ITERATION 3
  const productsArr = Array.from(document.getElementsByClassName("product"));
  let totalCounter = 0;
  productsArr.forEach((element) => {
    totalCounter += updateSubtotal(element);
    }
  );

  let totalPrice = document.querySelector("#total-value span")
  totalPrice.innerText = totalCounter;
  return totalCounter;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const toRemove = target.parentNode.parentNode;
  toRemove.remove();

  calculateAll();
}



// ITERATION 5

function createProduct() {
  const newName = document.querySelector('.create-product td input[type=text]').value;
  const newPrice = document.querySelector('.create-product td input[type=number]').value;

  const newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name span').innerText = newName;
  newProduct.querySelector('.price span').innerText = newPrice;
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);

  document.querySelector("tbody").appendChild(newProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnOptions = Array.from(document.getElementsByClassName("btn-remove"));
  removeBtnOptions.forEach((arrEle) => {
    arrEle.addEventListener('click', removeProduct);
  })

  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);

});
