const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    if (!input.value) {
        alert("Please provide a phone number")
    } else if (matches(input.value).includes(true)) {
        results.innerHTML += `<p>Valid US number: ${input.value}</p>`;
    } else {
        results.innerHTML += `<p>Invalid US number: ${input.value}</p>`;
    }
    input.value = "";
})

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        if (!input.value) {
            alert("Please provide a phone number")
        } else if (matches(input.value).includes(true)) {
            results.innerHTML += `<p>Valid US number: ${input.value}</p>`;
        } else {
            results.innerHTML += `<p>Invalid US number: ${input.value}</p>`;
        }
        input.value = "";
    }
    
})

clearBtn.addEventListener("click", () => {
    results.innerHTML = "";
})

const regex1 = /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const regex2 = /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;
const regex3 = /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
const regex4 = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/;
const regex5 = /^[0-9]{10}$/;
const regex6 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const regex7 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;

const regexes = [regex1, regex2, regex3, regex4, regex5, regex6, regex7]

const matches = (number) => {
    const match = [];
    regexes.forEach(regex => match.push(regex.test(number)))
    return match;
    }