// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// going to grab error! and add class attribute "hidden"
const errorDiv = document.getElementById("modal");
errorDiv.className = "hidden";
//grab all empty heart which has class name of "like-glyph"

let spans = document.querySelectorAll(".like-glyph");

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function(e){
    let heart = e.target;
    mimicServerCall()
    .then(function(data){
      if(heart.innerText === EMPTY_HEART){
        heart.setAttribute("class", "activated-heart");
        heart.innerText = FULL_HEART;
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      };
    })
    .catch(function(error){
      errorDiv.className = "";
      errorDiv.innerText = error;
      setTimeout(() => errorDiv.className = "hidden", 3000);
    })
  })
}



//add click event to like button




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
