var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length() === 0){
    return "Your shopping cart is empty.";
  }
  let cartItems = `In your cart, you have `;
  for(var i = 0; i < cart.length(); i++){
    if(i === cart.length()){
      cartItems += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else{
      `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return cartItems;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
