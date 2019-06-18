function addSwimlane() {
    let swimlane = document.createElement("div");
    swimlane.setAttribute("class", "swimlane");

    let container = document.getElementById("container");
    container.appendChild(swimlane);

    let nameContainer = document.createElement("div");
    nameContainer.setAttribute("class", "swimlane-name-container");

    let nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", "Enter swimlane name");
    nameContainer.appendChild(nameInput);

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", saveName);
    nameContainer.appendChild(saveButton);

    let nameText = document.createElement("h3");
    nameText.style.display = "none"; //hide name text
    nameContainer.appendChild(nameText);

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "editBtn");
    //editButton.innerText = "Edit name";
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editButton.style.display = "none" //hide edit button
    editButton.addEventListener("click", editName);
    nameContainer.appendChild(editButton);

    swimlane.appendChild(nameContainer);

    let addCardButton = document.createElement("button");
    addCardButton.innerText = "Add card";
    addCardButton.addEventListener("click", addCard);
    swimlane.appendChild(addCardButton);

    let deleteAllCardsButton = document.createElement("button");
    deleteAllCardsButton.innerText = "Delete all cards";
    deleteAllCardsButton.addEventListener("click", deleteAllCards);
    swimlane.appendChild(deleteAllCardsButton)

    let moveRightButton = document.createElement("button");
    moveRightButton.innerText = "Move swimlane right";
    moveRightButton.addEventListener("click", moveSwimlaneRight);
    swimlane.appendChild(moveRightButton);

    let moveLeftButton = document.createElement("button");
    moveLeftButton.innerText = "Move swimlane left";
    moveLeftButton.addEventListener("click", moveSwimlaneLeft)
    swimlane.appendChild(moveLeftButton);


    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete swimlane";
    deleteButton.addEventListener("click", deleteSwimlane);
    swimlane.appendChild(deleteButton);
}

function saveName() {
    let inputBox = this.parentElement.childNodes[0]; // input textbox
    let input = inputBox.value; //get user input

    if (input) { //textbox not empty 
        let name = this.parentElement.childNodes[2]; //name text
        name.innerText = input; //change name text
        name.style.display = "block"; // show name text;

        let edit = this.parentElement.childNodes[3]; //edit button
        let save = this.parentElement.childNodes[1]; //save button

        edit.style.display = "block"; //show edit button
        save.style.display = "none"; //hide save button
        inputBox.style.display = "none" //hide input box
        inputBox.style.backgroundColor = "white"
        //inputBox.value = "" // clear textbox 

    } else { //textbox is empty
        inputBox.style.backgroundColor = "red";
    }

}


function editName() {
    let inputBox = this.parentElement.childNodes[0]; //input textbox
    let save = this.parentElement.childNodes[1]; //save button
    let name = this.parentElement.childNodes[2]; //name text
    let edit = this.parentElement.childNodes[3]; //edit button

    inputBox.style.display = "block" // show input textbox
    save.style.display = "block"; // show save button
    name.style.display = "none"; //hide name text
    edit.style.display = "none" //hide name text
}

function addCard() {

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardTitleInput = document.createElement("input");
    cardTitleInput.setAttribute("placeholder", "Enter card title");
    card.appendChild(cardTitleInput);

    let cardTitle = document.createElement("h3");
    cardTitle.style.display = "none";
    card.appendChild(cardTitle);

    let cardDescriptionInput = document.createElement("input");
    cardDescriptionInput.setAttribute("placeholder", "Enter card description");
    card.appendChild(cardDescriptionInput);

    let cardDescription = document.createElement("p");
    cardDescription.style.display = "none";
    card.appendChild(cardDescription);

    let saveCardButton = document.createElement("button");
    saveCardButton.innerText = "Save Card";
    saveCardButton.addEventListener("click", saveCard);
    card.appendChild(saveCardButton);

    

    let moveCardUpButton = document.createElement("button");
    //moveCardUpButton.innerText = "Move card up";
    moveCardUpButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    moveCardUpButton.addEventListener("click", moveCardUp);
    card.appendChild(moveCardUpButton);

    let moveCardDownButton = document.createElement("button");
    //moveCardDownButton.innerText = "Move card down";
    moveCardDownButton.innerHTML = '<i class="fas fa-arrow-down"></i>'
    moveCardDownButton.addEventListener("click", moveCardDown);
    card.appendChild(moveCardDownButton);

    let moveCardLeftButton = document.createElement("button");
    //moveCardLeftButton.innerText = "Move card left";
    moveCardLeftButton.innerHTML ='<i class="fas fa-arrow-left"></i>'
    moveCardLeftButton.addEventListener("click", moveCardLeft);
    card.appendChild(moveCardLeftButton);

    let moveCardRightButton = document.createElement("button");
    //moveCardRightButton.innerText = "Move card right";
    moveCardRightButton.innerHTML = '<i class="fas fa-arrow-right"></i>'
    moveCardRightButton.addEventListener("click", moveCardRight);
    card.appendChild(moveCardRightButton);

    let deleteCardButton = document.createElement("button");
    //deleteCardButton.innerText = "Delete Card";
    deleteCardButton.innerHTML ='<i class="fas fa-trash"></i>';
    delete
    deleteCardButton.addEventListener("click", deleteCard);
    card.appendChild(deleteCardButton)

    let editCardButton = document.createElement("button");
    //editCardButton.innerHTML = "Edit card";
    editCardButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editCardButton.setAttribute("class", "editCardBtn")
    editCardButton.addEventListener("click", editCard);
    card.appendChild(editCardButton);

    this.parentElement.appendChild(card) //add card to swimlane

}

function saveCard() {
    let inputTitleBox = this.parentElement.childNodes[0]; //input textbox
    let inputTitle = inputTitleBox.value //get user input
    let inputDescriptionBox = this.parentElement.childNodes[2]; //input textbox
    let inputDescription = inputDescriptionBox.value //get user input
    

    if (inputTitle && inputDescription) { //textboxe are not empty
        let title = this.parentElement.childNodes[1] // title text 
        title.innerText = inputTitle; //change title
        title.style.display = "block"; // show title text

        let description = this.parentElement.childNodes[3]; // description text
        description.innerText = inputDescription; //change description
        description.style.display = "block"; // show description text

        // let edit = this.parentElement.childNodes[5]; //edit button
        let save = this.parentElement.childNodes[4]; //save button
        // edit.style.display = "block"; // show edit button
        save.style.display = "none"; // hide save button

        inputTitleBox.style.display = "none"; //hide title textbox
        inputDescriptionBox.style.display = "none" //hide description textbox
        inputTitleBox.style.backgroundColor = "white";
        inputDescriptionBox.style.backgroundColor = "white";
        //inputTitleBox.value = ""; // clear textbox
        //inputDescriptionBox.value = "";
    } else {
        if (!inputTitle && inputDescription) //title textbox empty
            inputTitleBox.style.backgroundColor = "red";
        inputDescriptionBox.style.backgroundColor = "white";
    }
    if (inputTitle && !inputDescription) { // description textbox empty
        inputTitleBox.style.backgroundColor = "white";
        inputDescriptionBox.style.backgroundColor = "red";
    }
    if (!inputTitle && !inputDescription) {
        inputTitleBox.style.backgroundColor = "red";
        inputDescriptionBox.style.backgroundColor = "red";
    }
    

}

function editCard() {
    let inputTitleBox = this.parentElement.childNodes[0]; //input title textbox
    let title = this.parentElement.childNodes[1]; //title text
    let inputDescriptionBox = this.parentElement.childNodes[2]; // input description textbox
    let description = this.parentElement.childNodes[3]; // description text 
    let save = this.parentElement.childNodes[4]; //save button
    // let edit = this.parentElement.childNodes[5]; //edit button
    inputTitleBox.style.display = "block"; //show input title textbox
    inputDescriptionBox.style.display = "block" // show input description textbox
    save.style.display = "block" //show save button

    title.style.display = "none" //hide input title textbox
    description.style.display = "none" //hide input description textbox
    // edit.style.display = "none";
    
}

function moveCardUp() {
    let card = this.parentElement; //card to move
    let previous = card.previousElementSibling; // previous card
    let swimlane = card.parentElement;

    if (previous && previous.getAttribute("class") === "card") {
        //make sure previous card exists
        swimlane.removeChild(card); //remove card from current position
        swimlane.insertBefore(card, previous); // move card before previous card

    }
}

function moveCardDown() {
    let card = this.parentElement; // card to move
    let next = card.nextElementSibling; // next card
    let swimlane = card.parentElement;

    if (next && next.getAttribute("class") === "card") {
        //make sure next card exists
        swimlane.removeChild(next); //remove card from current position
        swimlane.insertBefore(next, card) //move this card before this card
    }
}


function moveCardLeft() {
    let card = this.parentElement;
    let swimlane = card.parentElement;
    let previousSwimlane = swimlane.previousElementSibling;

    if (previousSwimlane) {
        swimlane.removeChild(card); // remove card from current swimlane
        previousSwimlane.appendChild(card); //add card to previous swimlane
    }
}

function moveCardRight() {
    let card = this.parentElement; //card to move
    let swimlane = card.parentElement;
    let nextSwimlane = swimlane.nextElementSibling;

    if (nextSwimlane) {
        swimlane.removeChild(card); //remove card from current swimlane
        nextSwimlane.appendChild(card); // add card to next swimlane
    }
}

function deleteCard() {
    let card = this.parentElement; // card to delete
    let swimlane = card.parentElement; // swimlane that the card is in 
    if (confirm("Delete card?"))
        swimlane.removeChild(card) //delete card from swimlane
}

function deleteAllCards() {
    let swimlane = this.parentElement;
    let count = swimlane.childElementCount;

    if (count > 6 && confirm("Delete all cards?")) { //swimlane has 6 other elements,followed by any cards
        for (let i = 6; i < count; i++) { //start with first card and delete each card one by one
            swimlane.removeChild(swimlane.childNodes[6]); //keep removing first card

        }
    }
}


function moveSwimlaneLeft() {
    let swimlane = this.parentElement; // swimlane to move
    let previousSwimlane = swimlane.previousElementSibling;
    let container = swimlane.parentElement;

    if (previousSwimlane) { //make sure  previous swimlane exists
        container.removeChild(swimlane) //remove swimlane from current position
        container.insertBefore(swimlane, previousSwimlane) //move swimlane before previous swimlane

    }
}

function moveSwimlaneRight() {
    let swimlane = this.parentElement;
    let nextSwimlane = swimlane.nextElementSibling;
    let container = swimlane.parentElement;

    if (nextSwimlane) { //make sure next swimlane exists
        container.removeChild(nextSwimlane) //remove next swimlane from current position 
        container.insertBefore(nextSwimlane, swimlane); //move next swimlane before this swimlane

    }
}

function deleteSwimlane() {
    let swimlane = this.parentElement;
    let container = swimlane.parentElement;

    if (confirm("Delete swimlane?")) {
        if (swimlane.childElementCount > 6) { // swimlane has cards (plus 6 other elements before them)
            if (!confirm("Delete all cards in swimlane?")) {
                let position = parseInt(prompt("Enter swimlane to move cards to:"));
                let count = swimlane.childElementCount;
                for (let i = 6; i < count; i++) { // starting with first card, move each card one by one
                    let newSwimlane = container.childNodes[position - 1]; // swimlane to move cards to
                    newSwimlane.appendChild(swimlane.childNodes[6]); // move a card to new swimlane
                }
            }
        }
        container.removeChild(swimlane); // remove swimlane
    }
}

function deleteAllSwimlanes() {
    let container = document.getElementById("container");
    let count = container.childElementCount;

    if (count > 0 && confirm("Delete all swimlanes?")) { // there are swimlanes to delete
        for (let i = 0; i < count; i++) { // delete each swimlane one by one
            container.removeChild(container.childNodes[0]); // keep removing first swimlane
        }
    }
}