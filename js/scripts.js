//business logic


//user interface logic
$(document).ready(function(){
    $('form#contactForm').submit(function(event){
        event.preventDefault()
        var name = $('#name').val();
        var pass = $('#email').val();
        var mess = $('#mess').val();
        alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
      });
});