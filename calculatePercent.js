//form 1 code
let btnForm1 = document.getElementById('btn-form1');
let form1BtnWay = document.getElementById('form1-way-button');
let form1Waydiv = document.getElementById('Form1-howto');
// functions of form 1

/*clicking on this function will do the equation by setting the varibales values in the input it will use it in line 16 and before using it will change the values to number */

btnForm1.onclick = function(){
    // the inputs only
    let numOfOwnedObj = parseFloat(document.getElementById('form1-num1').value);
    let numOfObj = parseFloat(document.getElementById('form1-num2').value);
    let percent = parseFloat(document.getElementById('form1-percent').value);
    // the answers in the inputs
    let takenPercent = document.getElementById('form1-taken-percent');
    let leftPercent = document.getElementById('form1-percent-left');

    //the taken value is the equation and the % as a string and the final value is a string type
    takenPercent = takenPercent.value = "%" + (numOfObj / numOfOwnedObj * percent );

    /* the leftpercent value is the percent - the takent value and cuz we can't do math operators betweet string and a number because of the "%" above so we add the full equation and add "%" so the finale value is a string too */
    leftPercent.value = "%" + ( percent - (numOfObj / numOfOwnedObj * percent ));
}
// a function that unhide the equation methode
form1BtnWay.onclick = way(form1Waydiv);
// form2 code
// the way button 
let form2BtnWay = document.getElementById('form2-way-button');
let form2Waydiv = document.getElementById('Form2-howto');
form2BtnWay.onclick = way(form2Waydiv);
// the form2 operation 
let form2Btn = document.getElementById('btn-form2');
form2Btn.onclick = function(){
    let form2Money = parseFloat(document.getElementById("form2-money").value);
    let form2MoneyPercent = parseFloat(document.getElementById("form2-money-percent").value);
    let moneyAmount  = document.getElementById("money-amount");
    moneyAmount.value =  (form2MoneyPercent * 0.01 * form2Money);
}


// the way function to unhide the equation methode 
function way (x) {
    return function(e){
    x.style.transition = '300ms';
    x.style.opacity = '100%';
    }
}


//form3 code
// the way button 
let form3BtnWay = document.getElementById('form3-way-button');
let form3Waydiv = document.getElementById('Form3-howto');
form3BtnWay.onclick = way(form3Waydiv);
// the form3 operation 
let form3Btn = document.getElementById('btn-form3');
let moneyDifferent = document.getElementById('money-different');
form3Btn.onclick = function(){
    let productPrice = parseFloat(document.getElementById('product-price').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let finalePrice = document.getElementById('finale-price');
    finalePrice = finalePrice.value =  (100 - discount) * 0.01 * productPrice; 
    moneyDifferent.value = productPrice - finalePrice;

}