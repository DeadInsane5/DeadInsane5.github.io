import { attListA, attListH } from "./main.js";

function buttons(subject) {
    const buttonContainer = document.querySelector(".buttonContainer");
    
    buttonContainer.innerHTML = "";

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.addEventListener("click", () => {
        attListH[subject] = attListH[subject] + 1;
        updateAttendanceDisplay(subject);
    })

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.addEventListener("click", () => {
        attListA[subject] = attListA[subject] + 1;
        attListH[subject] = attListH[subject] + 1;
        updateAttendanceDisplay(subject);
    });

    buttonContainer.appendChild(noButton);
    buttonContainer.appendChild(yesButton);
}

function updateAttendanceDisplay(subject) {
    const attContainer = document.querySelector(".attContainer");
    const attItems = attContainer.querySelectorAll("p");
    attItems.forEach(attItem => {
        if (attItem.textContent.startsWith(subject)) {
            attItem.textContent = `${subject} : ${(attListA[subject]/attListH[subject])*100}% [${attListA[subject]} out of ${attListH[subject]}  lectures attended]`;
        }
    });
}

export default buttons;