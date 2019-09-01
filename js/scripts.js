//business logic
function Order(type, size, crust,topping){
    this.type = type;
    this.size  = size;
    this.crust = crust;
    this.topping =togging;
}
function Total(quantity, delivery){
    this.quantity = quantity;
    this.delivery = delivery;
}

//user interface logic
$(document).ready(function(){
    $('form#myForm').submit(function(event){
        event.preventDefault();
        var pizzaType = $('#type').val();
        alert(pizzaType);
        var pizzaSize =  parseInt($('#size').val());
        alert(pizzaSize);
        var pizzaCrust =  $('#crust').val();
        alert(pizzaCrust);
        var pizzaTop =  $('#top').val();
        alert(pizzaTop);
        var pizzaQty =  parseInt($('#qty').val());
        alert(pizzaQty);
        var pizzaPick =  parseInt($('#size').val());
        alert(pizzaPick);
    });




    //sending message function
    $('form#contactForm').submit(function(event){
        event.preventDefault();
        var name = $('#name').val();
        var pass = $('#email').val();
        var mess = $('#mess').val();
        alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
      });

      
});