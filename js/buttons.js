import attList from "./main.js";

function buttons(subject) {
    const buttonContainer = document.querySelector(".buttonContainer");
    
    buttonContainer.innerHTML = "";

    const noButton = document.createElement("button");
    noButton.textContent = "No";

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.addEventListener("click", () => {
        attList[subject] = attList[subject] + 1;
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
            attItem.textContent = `${subject} : ${attList[subject]}`;
        }
    });
}

export default buttons;