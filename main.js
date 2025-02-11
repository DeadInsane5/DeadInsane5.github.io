let attendList = {
    "Phy" : 0,
    "Chem" : 0,
    "Maths" : 0,
    "EG" : 0,
    "PCC" : 0,
    "PP" : 0,
    "SS&CS" : 0,
    "IKS" : 0,
    "WK" : 0
}

const tableCells = document.querySelectorAll(".lec")

tableCells.forEach(tableCell => {
    tableCell.addEventListener("click", function (event) {
        prompt(event)
    });
})

for (let sub in attendList) {
    const attendanceContainer = document.querySelector(".attendanceContainer")
    
    const attendanceItem = document.createElement("p")
    attendanceItem.textContent = sub + " : " + attendList[sub]
    attendanceContainer.appendChild(attendanceItem)
}

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
    prompt.textContent = "Did you attend " + event.target.textContent + " ?"

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