/*
For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

The length of the word parameter cannot be less than 2.

The length of the match parameter must be 1.

The type of both the word and the match parameters must be string.
*/
function letterFinder(word, match) {

    
    if (!(lengthChecker && typeOfChecker)) {
        console.log("conditoin not match")
        //return;
    }
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
let lengthChecker = (w, m) =>  {return w.length >2 && m.lenght === 1};
let typeOfChecker = (w, m) =>  {return typeof(w) === 'string' && typeof(m) === 'string'}

// execute
letterFinder("11","n");


function objectMaker(val) {
    return {
        prop: val
    }
}

console.log(objectMaker('uuuu'))