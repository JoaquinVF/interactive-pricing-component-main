const range = document.getElementById('myRange');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');
const discount = document.getElementById('flexSwitchCheckDefault');
let priceChange = 16;

range.addEventListener('change', function(e){
   pageviews.innerText = `${range.value*2}K `;
   priceChange = `${Math.ceil(range.value/4+3)}`;
   price.innerText = priceChange;
})

discount.addEventListener('checked', function(e){
   console.log(priceChange)
   if (discount === 'checked') {
   }
   // priceChange = priceChange - (priceChange*100)/25
   // price.innerText = priceChange;
})

