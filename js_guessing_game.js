var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game(){
	var random_no = Math.random () * 100 ;    /* writing number as no. is resulting in error due to dot*/
	var random_no_int = Math.floor(random_no);
	target = random_no_int + 1;

while(!finished){
   guess_input_text = prompt("I am thinking of a number in  the range 1 to 100 What is the number")
   guess_input = parseInt(guess_input_text);
   guesses += 1;
   finished = check_guess();
  }
}

function check_guess() {
	if (isNaN(guess_input)) {
		alert("you have not entered a no.");
		return false;
	}
	if ((guess_input<1) || (guess_input>100)){

		alert("not in range");
		return false;
	}
	if (guess_input>target) {
		alert("Too large");
		return false;
	}
	if (guess_input<target) {

		alert("too small");
		return false;
	}
	alert("You got the answer. The number was"+  target + 
		   ".\n\n It took you  "   +  guesses +
		   "guesses to get the no.");
	 return true;

	 }