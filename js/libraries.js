function tableCells() {
    const container = document.querySelector(".inputContainer")

    const tableCells = document.querySelectorAll(".lec, .lab")

    tableCells.forEach(tableCell => {
        tableCell.addEventListener("click", (e) => {
            container.replaceChildren("")
            prompt(e, container)
            buttons(e, container)
            return e
        })
    })
}

function prompt(e, container) {
    const prompt = document.createElement("p")
    prompt.textContent = e.target.textContent

    container.appendChild(prompt)
}

function buttons(e, container) {
    const sub = e.target.id + e.target.attr("class")

    const noButton = document.createElement("button")
    noButton.textContent = "No"
    noButton.addEventListener("click", () => {
        console.log(sub)
    })

    const yesButton = document.createElement("button")
    yesButton.textContent = "Yes"
    yesButton.addEventListener("click", () => {
        console.log(sub)
    })

    container.appendChild(noButton)
    container.appendChild(yesButton)
}

export default tableCells