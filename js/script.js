
  //background logic:
  var addition = function(number1,number2){
    return number1 + number2;
  };
  //front-end logic:
  $(document).ready(function(){
    $('form#add').submit(function(event){
    var number1 = parseInt($('#add1').val());
    var number2 = parseInt($('#add2').val());
    alert(add(number1,number2));
  });
});
