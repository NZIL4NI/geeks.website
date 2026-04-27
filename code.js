const header = document.querySelector("header")
header.style.backgroundColor="blue"

const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("#headr-p");
const button = document.querySelector("#submit-button");

let fullName;
let email;
let message;


button.addEventListener("click", (event) => {
  //prevent form from refreshingpage
event.preventDefault();

// retrieve values from form
fullName = document.querySelector("#full-name").value;
email = document.querySelector("#email").value;
message = document.querySelector("#message").value;
h1.textContent = fullName;
headerParagraph.textContent = message;
}
);


