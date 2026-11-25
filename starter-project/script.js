let cards = [];
const form = document.getElementById("cardform");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");/* to add a card we creating a function named addCard 
with two parameters and declaring in name of card using object method key and value pushing */
function addCard(question, answer) {
    if (question === "" || answer === "") return;
    cards.push({ id: Date.now(), question: question, answer: answer });/*gives a unique number, so you can use it as the card's id.*/
    saveDeck();
    manageCards();

}

function deleteCard(cardId) {
    cards = cards.filter(function (card) {
        return card.id !== cardId;
    });
    saveDeck();
    manageCards();
}
function manageCards() {
    const cardList = document.getElementById("cardlist");
    cardList.innerHTML = "";
    cards.forEach(function (card) {
        const listItem = document.createElement("li");
        listItem.textContent = card.question;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteCard(card.id);
        });
        listItem.appendChild(deleteButton);
        cardList.appendChild(listItem);
    });
}
function saveDeck() {
    sessionStorage.setItem("deck", JSON.stringify(cards));

}
function loadDeck() {
    const saved = sessionStorage.getItem("deck");
    cards = saved ? JSON.parse(saved) : [];

}
const startButton = document.getElementById("startbutn");
const studyPanel = document.getElementById("studysession");
const EndButton = document.getElementById("end-btn");
const studyProgress = document.getElementById("progress");
function displayCard() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < cardcopy.length; j++) {
            cards.push(new cardcopy(j+1, array[i].question, array[j].answer));
        }
    }
    return cardcopy;
}
function loadDeck() {
    const saved = sessionStorage.getItem("deck");
    cards = saved ? JSON.parse(saved) : [];

}
function startStudying(){
    const study = document.getElementById("startbut");
    study.addEventListener("click",function(){
        
    })
    
}
form.addEventListener("submit", function (event) {
    event.preventDefault();/*preventdefault helps not to refresh the page*/
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    addCard(question, answer);
    form.hidden = true;
    toggleform.textContent = "Add card";
    form.reset();/* for event submit creating a function */
});
const toggleform = document.getElementById("toggleform");
toggleform.addEventListener("click", function () {
    form.hidden = !form.hidden;
    toggleform.textContent = form.hidden ? "Add card" : "Hide form";
    if (!form.hidden) questionInput.focus();
});

loadDeck();
manageCards();








