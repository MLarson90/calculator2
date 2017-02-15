
  //background logic:
  var addition = function(number1,number2){
    return number1 + number2;
  };
  var subtract = function(number1,number2){
    return number1 - number2;
  };
  var multiply = function(number1,number2){
    return number1 * number2;
  };
  var divid = function(number1,number2){
    return number1 / number2;
  };
  //front-end logic:
  $(document).ready(function(){
    $('form#sub').submit(function(event){
      event.preventDefault();
    var number1 = parseInt($('#sub1').val());
    var number2 = parseInt($('#sub2').val());
    var result = subtract(number1,number2);
    $('.output').text(result);
  });
  $('form#mult').submit(function(event){
    event.preventDefault();
  var number1 = parseInt($('#mult1').val());
  var number2 = parseInt($('#mult2').val());
  var result = multiply(number1,number2);
  $('.output').text(result);
});
$('form#add').submit(function(event){
  event.preventDefault();
var number1 = parseInt($('#add1').val());
var number2 = parseInt($('#add2').val());
var result = addition(number1,number2);
$('.output').text(result);
});
$('form#div').submit(function(event){
  event.preventDefault();
var number1 = parseInt($('#div1').val());
var number2 = parseInt($('#div2').val());
var result = divid(number1,number2);
$('.output').text(result);
});
});
