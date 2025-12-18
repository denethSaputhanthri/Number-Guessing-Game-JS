let guessNumber =Math.floor(Math.random() *10)+1;
console.log(guessNumber);

function search() {
    let input=document.getElementById('txt').value;
    if (guessNumber==input) {
        Swal.fire({
      title: "Congratulations",
      text: "You Gusessed the number correct!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Play Again",
        });
    }else{
        Swal.fire({
      title: "Try again!",
      text: "You clicked the button!",
      icon: "error",
    });
    }
}



