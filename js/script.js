
// This is just a mock up for possible ways of extending website


// Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});