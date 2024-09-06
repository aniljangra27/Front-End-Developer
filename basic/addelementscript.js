function addElement() {
    let divNode = document.createElement("div");
    // let tc = document.createTextNode("Hi there and greetings!!!!!")
    divNode.textContent = "Hi there and greetings!!!!!";
    document.body.appendChild(divNode);
    // divNode.appendChild(tc);
}