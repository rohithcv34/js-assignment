const myString="hello world";

function reverseStr(str){
    let string = "";

    for(let i=str.length-1; i>=0; i--){
        string = string + str[i];
    }
    return string;
}

console.log(reverseStr(myString));


// using methods
function reverse(string){
    let revrsedstring = string.split('').reverse().join('');

    return revrsedstring;

}
console.log(reverse("Abhinav"));