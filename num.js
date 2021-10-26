function check(){
    var num = document.getElementById("number").value;
    var result = document.getElementById("result");

    if(num.length == 10) {
        if(num.charAt(0) == 6 || num.charAt(0) == 7 || num.charAt(0) == 8 || num.charAt(0) == 9){
            result.innerHTML = 'Your Mobile Number is Valid';
            result.style.color= "#1406ef";
        }
        else{
            result.innerHTML ='Mobile Number not valid';
            result.style.color= "red";
        }
    }
    else {
        result.innerHTML = 'Please Enter 10 digit number';
        result.style.color="red";
    }
}