var input = document.getElementById('bill-amount');
console.log(input);

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var tip = document.getElementById('tip');
var totalBill = document.getElementById('total-bill');


console.log(button1);
console.log(button2);
console.log(button3);
//input.addEventListener('input', function(){

//});

button1.addEventListener('click', function () {
    button1.classList.add('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    console.log(input.value * .1);
    var tipAmount = input.value * .1;
    var total = parseFloat(input.value) + tipAmount;
    console.log(tipAmount);
    console.log(total);
    tip.innerText = "$ " + tipAmount.toFixed(2);
    totalBill.innerText = "$ " + total.toFixed(2);
});
button2.addEventListener('click', function () {
    button2.classList.add('active');
    button1.classList.remove('active');
    button3.classList.remove('active');
    console.log(input.value * .15);
    var tipAmount = input.value * .15;
    var total = parseFloat(input.value) + tipAmount;
    console.log(tipAmount);
    console.log(total);
    tip.innerText = "$" + tipAmount.toFixed(2);
    totalBill.innerText = "$" + total.toFixed(2);
});
button3.addEventListener('click', function () {
    button3.classList.add('active');
    button2.classList.remove('active');
    button1.classList.remove('active');
    console.log(input.value * .2);
    var tipAmount = input.value * .2;
    var total = parseFloat(input.value) + tipAmount;
    console.log(tipAmount);
    console.log(total);
    tip.innerText = "$" + tipAmount.toFixed(2);
    totalBill.innerText = "$" + total.toFixed(2);
});

