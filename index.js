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
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  let cartItems = `In your cart, you have `;
  for(var i = 0; i < cart.length; i++){
    if(i === (cart.length - 1)){
      if(cart.length > 1){
        cartItems += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }else {
        cartItems += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
    } else{
      cartItems += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  }
  return cartItems;
}

function total() {
  // write your code here
  let sum = 0;
  cart.forEach(function(item){
    sum += item.itemPrice;
  });
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === null){
    return "Sorry, we don't have a credit card on file for you.";
  }
  let total = total();
  
}
