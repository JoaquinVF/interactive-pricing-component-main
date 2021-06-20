const range = document.getElementById('myRange');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price')

range.addEventListener('change', function(e){
   console.log(range.value)
   pageviews.innerText = `${range.value*2}K `;
   price.innerText = `${Math.ceil(range.value/4+3)}`
})


