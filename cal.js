document.querySelector(".screen").addEventListener("keyup", function(event) {
    var screen = document.querySelector(".screen");
    screen.value += event.key;
});

document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector(".screen").value = "";
});

document.querySelector("#add").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "+"; // Append "+" to the existing value
});


document.querySelector("#subtract").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "-"; // Append "-" to the existing value
});

document.querySelector("#multiply").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "*"; // Append "*" to the existing value
}); 

document.querySelector("#divide").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value    += "/"; // Append "/" to the existing value
});

document.querySelector("#equal").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value = eval(screen.value);
});

document.querySelector("#percent").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value    += "%"; // Append "%" to the existing value
});

document.querySelector("#seven").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "7";
});

document.querySelector("#eight").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "8";
});

document.querySelector("#nine").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "9";
});

document.querySelector("#four").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "4";
});

document.querySelector("#five").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "5";
});

document.querySelector("#six").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "6";
});

document.querySelector("#one").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "1";
});

document.querySelector("#two").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "2";
});

document.querySelector("#three").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "3";
});

document.querySelector("#zero").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += "0";
});

document.querySelector("#decimal").addEventListener("click", function() {
    var screen = document.querySelector(".screen");
    screen.value += ".";
}); 