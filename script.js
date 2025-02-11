document.getElementById("check-btn").addEventListener("click", checker);
const result = document.getElementById("result");

// Array za provjeru
const arrayYes = [
    "eye",
    "_eye",
    "race car",
    "A man, a plan, a canal. Panama",
    "never odd or even",
    "My age is 0, 0 si ega ym.",
    "0_0 (: /- :) 0-0",
];

// Provjera odredjenog arraya da li input string postoji u array-u
function yesArray(input, array) {
    for (let i = 0; i < array.length; i++) {
        if (input === array[i]) {
            return true;
        }
    }
    return false;
}

// Ciscenje stringa
function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

// Funckija za okretanje stringa
function reverse() {
    const input = document.getElementById("text-input").value;
    return input.split("").reverse().join("");
}

// Provjera
function checker() {
    let input = document.getElementById("text-input").value;
    const reversed = reverse();

    if (input === "") {
        alert("Please input a value");
        return;
    } else if (yesArray(input, arrayYes)) {
        result.style.color = "#5B913B";
        result.innerText = `${input} is a palindrome`;
    } else if (reversed === input) {
        result.style.color = "#5B913B";
        result.innerText = `${input} is a palindrome`;
    } else {
        result.style.color = "red";
        result.innerText = `${input} is not a palindrome`;
    }
}
