
function URLify(string){
    var length = string.length;
    console.log("Length of the string:", length);
    for(var i = 0; i < length; i++){
        if(string[i]===" "){
        console.log("Space alert !!");
        string.replace(" ","%20");
        }
        console.log("after replacement: ",string)
    }
}

URLify("Hello World");

// Input: "Hello World"
// Pseudo code:
// 1.  Get length of the string
// 2.  Check to see if the character is a space or something else
// 3.  if you find a space then replace with %20
// Output: "Hello%20World"