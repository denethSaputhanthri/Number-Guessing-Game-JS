console.log("js Loaded..!");
let guessNumber =Math.floor(Math.random() *10)+1;
console.log(guessNumber);
console.log("------------------------------------");

function search() {
    let input=document.getElementById('txt').value;
    if (guessNumber==input) {
        console.log("Win");
        
    }else{
        console.log("Lost");
    }
}



// let guessNumber = Math.floor(Math.random() * 10) + 1;
