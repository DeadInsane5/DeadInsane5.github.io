const tableCells = document.querySelectorAll(".lec")

tableCells.forEach(tableCell => {
    tableCell.addEventListener("click", function(event) {
        alert("You clicked on: " + event.target.textContent);
    });
})

