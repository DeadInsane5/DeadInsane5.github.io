import tableCells from "./libraries.js"
import { attListA, attListH, attListLabA, attListLabH, attend, bunk, display } from "./database.js"

tableCells()

const container = document.querySelector(".attContainer")

for (let sub in attListA) {
    const attListItem = document.createElement("p")
    attListItem.textContent = display(attListA, attListH, attListLabA, attListLabH, sub)
    container.appendChild(attListItem)
}