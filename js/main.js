import prompt from "./prompt.js";
import buttons from "./buttons.js";

const tableCells = document.querySelectorAll(".lec");

tableCells.forEach(tableCell => {
    tableCell.addEventListener("click", (event) => {
        const subject = event.target.textContent;
        prompt(event);
        buttons(subject);
    });
});

let attListA = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
    "Workshop": 0,
    "Recess" : 0,
};

let attListH = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
    "Workshop": 0,
    "Recess" : 0,
}

const attContainer = document.querySelector(".attContainer");
for (let subject in attListA) {
    const attItem = document.createElement("p");
    attItem.textContent = `${subject} : ${(attListA[subject]/attListH[subject])*100}% [${attListA[subject]} out of ${attListH[subject]} lectures attended]`;
    attContainer.appendChild(attItem);
}

export {
    attListA,
    attListH
}