const tableCells = document.querySelectorAll('#myTable td');

tableCells.forEach(td => {
    td.addEventListener('click', function(event) {
        alert("You clicked on: " + event.target.textContent);
    }
    );
}
);