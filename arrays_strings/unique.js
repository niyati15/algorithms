function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return console.log("Array elements are not UNIQUE");
            }
        }
    }
    return console.log("Array elements are UNIQUE");
}

unique("hello");