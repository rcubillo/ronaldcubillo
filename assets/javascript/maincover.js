line = document.querySelector(".menu");
menu = document.querySelector(".menu-items");

line.addEventListener("click", function () {
    setTimeout(lineFunction, 200);
    menuToggle();
})

function lineFunction() {
    if (line.classList.contains("paused") === true) {
        line.classList.replace("paused", "active");
    }
    else if (line.classList.contains("active") === true) {
        line.classList.remove("active");
        line.classList.add("inactive");
    }
    else {
        line.classList.remove("inactive");
        line.classList.add("active");
    }
}

function menuToggle() {
    menu.classList.toggle("active")
}