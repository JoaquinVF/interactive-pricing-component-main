const range = document.getElementById('myRange');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');
const discountSwitch = document.getElementById('flexSwitchCheckDefault');
const btn = document.querySelector("button");
let priceChange = 16;
let discount = 0;
let priceDiscount = priceChange - discount;
let count = 1;

function changePrice(){
   pageviews.innerText = `${range.value*2}K `;
   priceChange = `${Math.ceil(range.value/4+3)}`;
   let priceDiscount = priceChange - discount;
   price.innerText = priceDiscount;
}

function discountF(){
   count += 1;
   if (count%2===0) {
      discount = (priceChange*25)/100;
      changePrice();
   } else {
      discount = 0;
      changePrice();
   }
}

function sayHello(){
   console.log("Hola mundo")
}

range.addEventListener('change', (e) =>{
   changePrice();
   discountF();
   discountF();
});

discountSwitch.addEventListener('change', (e) => {
   discountF();
})
btn.addEventListener('click', (e) =>{
   alert('Gracias por probar la página!')
})


