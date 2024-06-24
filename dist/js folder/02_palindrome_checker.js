const input=document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("");

    // split() method convert the string into the character arr.
    // join() method convert the character into the string.



}

function check(){
    const value= input.value;
    const reverse=reverseString(value)


    if(value==reverse){
        alert("Palindrome")
    }else{
        alert("Not today!")
    }
    input.value="";

    

}