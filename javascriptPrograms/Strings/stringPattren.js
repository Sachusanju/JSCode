function printSubstrings(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input[i];
        console.log(result);
    }
}

// Test the function
let input = "selenium";
printSubstrings(input);