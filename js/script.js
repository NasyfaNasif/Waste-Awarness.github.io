menu = document.getElementById("menu");
mobile = document.getElementById("mobile");
overlay = document.getElementById("overlay");

menu.addEventListener("click", function () {
    mobile.style.display === "none",
    overlay.style.display = "block",
    menu.style.display = "block"
})

menu.addEventListener("click", function () {
    mobile.style.display = "none",
    menu.style.display = "none",
})