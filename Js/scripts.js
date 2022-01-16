$(document).ready(function(){
    $('#delivery').change(function(event){
        if (this.checked){
            alert("you can pick up your order in the next 1hour")
        }
        else{
            alert("The delivery service will cost you extra ksh.100 on your total price")
        }

    })
})