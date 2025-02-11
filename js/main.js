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

let attList = {
    "Phy": 0,
    "Chem": 0,
    "Maths": 0,
    "EG": 0,
    "PCC": 0,
    "PP": 0,
    "SS&CS": 0,
    "IKS": 0,
    "WK": 0,
};

const attContainer = document.querySelector(".attContainer");
for (let sub in attList) {
    const attItem = document.createElement("p");
    attItem.textContent = `${sub} : ${attList[sub]}`;
    attContainer.appendChild(attItem);
}

export default attList;