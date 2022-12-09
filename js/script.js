/*  
This js is a VERY small look at  some of the user onboarding that I use on my Forum. This is very basic compared to
the full server side validation logic that a real site uses.

I did not code my forum, its a paid package that I've used for years. I do, however, customize 
certain scripts, php and html to my own needs, usually with success, though js is a real challenge for me.*/



const forumName = 'Talk and Stuff';
console.log(forumName)

let text = "Sign up now, the forum needs you!"
alert(text)

// all these variables go in a form with html/CSS goodies
let email = "enter your email address";
let geoLoc = "muddy road";
let birDate = "Birth Date";
let favColor = "faded denim";
let fName = "Joe";
let lasName = " Smif";
let useName = "Bobby";
let pssWord = "your password";


// these variables are used in 'send mail' to new user 
let welcomMail = " Welcome to the Forum!";
let contactUs = "contact us if you need help!";
let admin = "overlord"




// after registration is complete print to user screen and sends email or user can print screen
document.write(`
<h2><br>Thank you for creating a new account <span>${fName} ${lasName}</span></h2>
<p>Your userName is: ${useName}</p><br> <p>Your password is: ${pssWord}</p>  
<p>Your Location is: ${geoLoc}</p> <br> <p>Your Bday is: ${birDate}</p>
<br><p>your fav color is: ${favColor}</p>`)






