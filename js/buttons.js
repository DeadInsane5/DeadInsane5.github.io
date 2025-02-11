import { attListA, attListH, attListLabA, attListLabH } from "./main.js";

function buttons(subject) {
    let attVal = 1;

    let subjectStr = subject.split(" ");
    if (subjectStr[1] == "Lab") {
        attVal = 2;
        subject = subjectStr[0];
    }

    const buttonContainer = document.querySelector(".buttonContainer");

    buttonContainer.innerHTML = "";

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.addEventListener("click", () => {
        if (attVal == 1) {
            attListH[subject] = attListH[subject] + 1;
            updateAttendanceDisplay(subject);
        } else {
            attListH[subject] = attListH[subject] + 2;
            attListLabH[subject] = attListLabH[subject] + 1;
            updateAttendanceDisplay(subject);
        }
    });

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.addEventListener("click", () => {
        if (attVal == 1) {
            attListA[subject] = attListA[subject] + 1;
            attListH[subject] = attListH[subject] + 1;
            updateAttendanceDisplay(subject);
        } else {
            attListA[subject] = attListA[subject] + 2;
            attListH[subject] = attListH[subject] + 2;

            attListLabA[subject] = attListLabA[subject] + 1;
            attListLabH[subject] = attListLabH[subject] + 1;
            updateAttendanceDisplay(subject);
        }
    });

    buttonContainer.appendChild(noButton);
    buttonContainer.appendChild(yesButton);
}

function updateAttendanceDisplay(subject) {
    const attContainer = document.querySelector(".attContainer");
    const attItems = attContainer.querySelectorAll("p");
    attItems.forEach(attItem => {
        if (attItem.textContent.startsWith(subject)) {
            if (subject !== "Workshop" && subject !== "Recess") {
                attItem.textContent = `${subject} : ${(attListA[subject] / attListH[subject]) * 100}% [${attListA[subject]}/${attListH[subject]} lectures | ${attListLabA[subject]}/${attListLabH[subject]} labs]`;
            } else {
                attItem.textContent = `${subject} : ${(attListA[subject] / attListH[subject]) * 100}% [${attListA[subject]}/${attListH[subject]} lectures]`;
            }
        }
    });
}

export default buttons;