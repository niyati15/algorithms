function permutation(stringOne, stringTwo) {
    if (stringOne.length == stringTwo.length) {
        var stringOne = stringOne.split('').sort().join('');
        var stringTwo = stringTwo.split('').sort().join('');
        if (stringOne === stringTwo)
            return console.log("strings are same");
    }
    else return console.log("strings are not same");
}

permutation("helo", "hello");