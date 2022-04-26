const h4 = document.createElement("h4");
h4.textContent = "Actor";
h4.classList = h4;
document.querySelector("body").appendChild(h4);
document.querySelector("div").appendChild(h4);

const footer = document.createElement("footer");
footer.classList = footer;
footer.textContent = "Contact \n";
document.querySelector("body").appendChild(footer);
document.querySelector("div").appendChild(footer);


const fb = document.createElement ("a");
const fblink = document.createTextNode("Facebook");
fb.appendChild(fblink);
fb.href = "https://www.facebook.com/aaron.wertheim.9";

fb.classList = "fb";
document.body.appendChild(fb);
document.querySelector("div").appendChild(fb);
document.querySelector("footer").appendChild(fb);

const email = document.createElement ("a");
const emailLink = document.createTextNode ("Email");
email.appendChild(emailLink);
email.href = "mailto:aawertheim@gmail.com";
email.classList = "email";
document.body.appendChild(email);
document.querySelector("div").appendChild(email);
document.querySelector("footer").appendChild(email);
