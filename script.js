function makeid(l) {
  // write your code here
	 const allowedCharacters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let res=""
  while(l>0){
	l--;
	let random = Math.floor(Math.random()*62);
	//console.log(random)
	res+=allowedCharacters[random]
  }
  return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
