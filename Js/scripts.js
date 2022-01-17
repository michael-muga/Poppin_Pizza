$(document).ready(function(){
    $('#delivery').change(function(event){
        var deliver = $('#deliver').val();
        if (deliver == "ndel"){
            alert("you can pick up your order in the next 1hour")
        }
        else{
            var myLocation= prompt("please enter your location:")
            alert("The delivery service will cost you extra ksh.100 on your total price to be delivered at" +" "+ myLocation)
        }

    })

})

/*function checkbutton(){
    if(document.getElementById('deliver').checked){
        var myLocation = prompt("please enter your location:")
        alert("The delivery service will cost you extra ksh.100 on your total price to be delivered at" +" "+ myLocation)
    }
    else{
        alert("you can pick up your order in the next 1 hr")
    }
}*/

$(document).ready(function(){
    $(".order button").click(function(){
        var pizzaSize = $("input[name='size']:checked").val();
        var crustType = $("input[name='crust']:checked").val();
        var toppings = $("input[name='topping]:checked").val();
        var pizzaAmount = $("input[name='amount']:checked").val()

        $("ol#myorders").append("<li><span class='contact'>" +"pizza size:"+" "+ pizzaSize.value + "</span></li>");
        $("ol#myorders").append("<li><span class='contact'>" +"pizza size:"+" "+ crustType.value + "</span></li>");
        $("ol#myorders").append("<li><span class='contact'>" +"pizza size:"+" "+ toppings.value + "</span></li>");
        $("ol#myorders").append("<li><span class='contact'>" +"pizza size:"+" "+ pizzaAmount.value + "</span></li>");


    });
});