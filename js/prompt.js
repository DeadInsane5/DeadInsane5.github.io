function prompt(event) {
    const container = document.querySelector(".promptContainer");

    container.replaceChildren("");

    const prompt = document.createElement("p");
    let sub = event.target.textContent;
    prompt.textContent = `Did you attend ${sub}?`;

    container.appendChild(prompt);
}

export default prompt;