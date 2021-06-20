var input = document.querySelector("input[type=range]");
   actualizarInput(input) 


input.addEventListener("input", function(evt) {
   actualizarInput(input)
});

function actualizarInput(input){
   var label = input.parentElement.querySelector("label");
   label.innerHTML = input.value;
   var inputMin = input.getAttribute("min");
   var inputMax = input.getAttribute("max");
   var unidad = (inputMax - inputMin) / 100;
   input.style.setProperty("--value", (input.value - inputMin)/unidad);  
}