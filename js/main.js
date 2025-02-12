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
    "Recess": 0,
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
    "Recess": 0,
};

let attListLabA = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
};

let attListLabH = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
};

const attContainer = document.querySelector(".attContainer");
for (let subject in attListA) {
    let subjectStr = subject.split(" ");
    if (subjectStr[1] == "Lab") {
        subject = subjectStr[0];
    }

    const att = attListA[subject]/attListH[subject]
    const attItem = document.createElement("p");
    if (isNaN(att)) {
        if (subject !== "Workshop" && subject !== "Recess") {
            attItem.textContent = `${subject} : ${(0) * 100}% [${attListA[subject]}/${attListH[subject]} lectures | ${attListLabA[subject]}/${attListLabH[subject]} labs]`;
        } else {
            attItem.textContent = `${subject} : ${(0) * 100}% [${attListA[subject]}/${attListH[subject]} lectures]`;
        }
     }
    else {
        if (subject !== "Workshop" && subject !== "Recess") {
            attItem.textContent = `${subject} : ${(att) * 100}% [${attListA[subject]}/${attListH[subject]} lectures | ${attListLabA[subject]}/${attListLabH[subject]} labs]`;
        } else {
            attItem.textContent = `${subject} : ${(att) * 100}% [${attListA[subject]}/${attListH[subject]} lectures]`;
        }
    }
    attContainer.appendChild(attItem);
}

export {
    attListA,
    attListH,
    attListLabA,
    attListLabH,
};