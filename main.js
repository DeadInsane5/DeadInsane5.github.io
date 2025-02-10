const tableCells = document.querySelectorAll(".lec")

tableCells.forEach(tableCell => {
    tableCell.addEventListener("click", function (event) {
        prompt(event)
    });
})

function prompt(event) {
    //container
    const container = document.querySelector(".container")

    //remove previous prompt
    container.replaceChildren("")

    //prompt container div
    const promptContainer = document.createElement("div")
    promptContainer.classList.add("promptContainer")

    //prompt
    const prompt = document.createElement("div")
    prompt.classList.add("prompt")
    prompt.textContent = "Did you attend " + event.textContent + " ?"

    //no button
    const button1 = document.createElement("button")
    button1.classList.add("noButton")
    button1.textContent = "No"

    //yes button
    const button2 = document.createElement("button")
    button2.classList.add("yesButton")
    button2.textContent = "Yes"

    //append children
    promptContainer.appendChild(prompt)
    promptContainer.appendChild(button1)
    promptContainer.appendChild(button2)

    container.appendChild(promptContainer)
}