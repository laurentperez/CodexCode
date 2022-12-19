////////////////////////////////////////////////////////
//                                                    //
// WARNING: ALL THE CODE WAS CREATED BY OPENAI CODEX  //
// Thanks to all OpenAI contributors and researchers  //
//                                                    //
// if you want to use AI generated code, you can use  //
// https://beta.openai.com/codex-javascript-sandbox   //
//                                                    //
// For more information, please visit OpenAI's website//
//                                                    //
////////////////////////////////////////////////////////

/** FIRST STEP : create a text box */

/** SECOND STEP : create a multiple choice scrolling menu with "+, -, *, /" symbols */

/** THIRD STEP : create a second box */

/** FOURTH STEP : Make a big text */

/** FIVETH STEP : make the last created text 100px font size */

/** SIXTH STEP : when the button is pressed, if the symbole of the multiple choice scrolling menu is +, 
 * then add the value of the first box and the second box and show it in the big number" */

/** SEVENTH STEP : Center all */

/** EIGHTH STEP : center the big text */

/** NINETH STEP : make the big text font more modern */

/** TENTH STEP : add a very light blue background color */

/** ELEVENTH STEP : make default text in textboxes is "0" */

/** TWELFTH STEP : Make a TODO for creating a support for Floating number */


// DUE TO THE EVOLUTION OF IA, YOUR RESULT CAN BE DIFERENT



// =====================START=OF=CODE=============================


/* create a text box */
var textBox = document.createElement('input');
textBox.type = 'text';
textBox.id = 'textBox';
document.body.appendChild(textBox);
/* create a multiple choice scrolling menu with "+, -, *, /" symbols */
var menu = document.createElement('select');
menu.id = 'menu';
var plus = document.createElement('option');
plus.innerHTML = '+';
menu.appendChild(plus);
var minus = document.createElement('option');
minus.innerHTML = '-';
menu.appendChild(minus);
var times = document.createElement('option');
times.innerHTML = '*';
menu.appendChild(times);
var divide = document.createElement('option');
divide.innerHTML = '/';
menu.appendChild(divide);
document.body.appendChild(menu);
/* create a second box */
var textBox2 = document.createElement('input');
textBox2.type = 'text';
textBox2.id = 'textBox2';
document.body.appendChild(textBox2);
/* Make a big text */
var bigText = document.createElement('div');
bigText.id = 'bigText';
bigText.innerHTML = '0';
document.body.appendChild(bigText);
/* make the last created text 100px font size */
bigText.style.fontSize = '100px';
/* create a calculate button */
var calculateButton = document.createElement('button');
calculateButton.innerHTML = 'Calculate';
calculateButton.id = 'calculateButton';
document.body.appendChild(calculateButton);
/* when the button is pressed, if the symbole of the multiple choice scrolling menu is +, then add the value of the first box and the second box and show it in the big number */
calculateButton.onclick = function() {
  if (menu.value == '+') {
    bigText.innerHTML = parseInt(textBox.value) + parseInt(textBox2.value);
  }
  if (menu.value == '-') {
    bigText.innerHTML = parseInt(textBox.value) - parseInt(textBox2.value);
  }
  if (menu.value == '*') {
    bigText.innerHTML = parseInt(textBox.value) * parseInt(textBox2.value);
  }
  if (menu.value == '/') {
    bigText.innerHTML = parseInt(textBox.value) / parseInt(textBox2.value);
  }
}
/* center all */
textBox.style.margin = 'auto';
textBox.style.display = 'block';
textBox2.style.margin = 'auto';
textBox2.style.display = 'block';
menu.style.margin = 'auto';
menu.style.display = 'block';
bigText.style.margin = 'auto';
bigText.style.display = 'block';
calculateButton.style.margin = 'auto';
calculateButton.style.display = 'block';
/* center the big text */
bigText.style.textAlign = 'center';
/* make the big text font more modern */
bigText.style.fontFamily = 'Arial';
/* add a very light blue background color */
document.body.style.backgroundColor = '#e6f2ff';
/* make default text in textboxes is "0" */
textBox.value = '0';
textBox2.value = '0';
/* Make a TODO for creating a support for Floating number */
/* TODO: create a support for Floating number */


// ==========================END=OF=CODE===================================