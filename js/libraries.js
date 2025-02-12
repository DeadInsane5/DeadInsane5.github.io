import { attListA, attListH, attListLabA, attListLabH, attend, bunk, display } from "./database.js";

function tableCells() {
    const container = document.querySelector(".inputContainer");

    const tableCells = document.querySelectorAll(".lec, .lab");

    tableCells.forEach(tableCell => {
        tableCell.addEventListener("click", (e) => {
            container.replaceChildren("");
            prompt(e, container);
            buttons(e, container);
        });
    });
}

function prompt(e, container) {
    const prompt = document.createElement("p");
    prompt.textContent = e.target.textContent;

    container.appendChild(prompt);
}

function buttons(e, container) {
    const sub = e.target.id;
    const lab = e.target.classList.contains("lab");

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.addEventListener("click", () => {
        bunk(sub, lab);
        displayAtt();
    });

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.addEventListener("click", () => {
        attend(sub, lab);
        displayAtt();
    });

    container.appendChild(noButton);
    container.appendChild(yesButton);
}

function displayAtt() {
    const container = document.querySelector(".attContainer");

    container.replaceChildren("");

    for (let sub in attListA) {
        const attListItem = document.createElement("p");
        attListItem.textContent = display(attListA, attListH, attListLabA, attListLabH, sub);
        container.appendChild(attListItem);
    }
}

export {
    tableCells,
    displayAtt
}