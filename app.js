let counterVal = document.getElementById('value');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let count = 0;

button1.addEventListener('click', function(){
   count += 1;
   counterVal.innerHTML = count;
});

button2.addEventListener('click', function(){
   count -= 1;
   counterVal.innerHTML = count;
});