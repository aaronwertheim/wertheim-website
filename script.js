const h4 = document.createElement("h4");
h4.textContent = "Actor";
document.getElementById("name").appendChild(h4);

const about = document.getElementById("about");
const credits = document.getElementById("credits");

function reduceMenu() {
    this.textContent = "";
}

credits.addEventListener('mouseenter', function() {
    credits.textContent = "Credits";
})
about.addEventListener('mouseenter', function() {
    about.textContent = "About Me";
})

about.addEventListener('mouseleave', reduceMenu);
credits.addEventListener('mouseleave', reduceMenu);