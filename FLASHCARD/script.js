// Define your flashcards as an array of objects with 'term' and 'definition' properties
const flashcards = [
    { term: "CA", definition: "OUTBOUND CALL" },
    { term: "ICA", definition: "INBOUND CALL" },
    { term: "DBTR", definition: "DEBTOR" },
    { term: "IDS", definition: "IDENTIFIED SELF" },
    { term: "IDC", definition: "IDENTIFIED COMPANY" },
    { term: "IDD", definition: "IDENTIFIED DBTR" },
    { term: "IDCL", definition: "IDENTIFIED CLIENT" },
    { term: "GV", definition: "GAVE" },
    { term: "RCV", definition: "RECORDED CALL VERBIAGE" },
    { term: "MMW", definition: "MINI MIRANDA WARNING" },
    { term: "NFQ", definition: "NO FURTHER QUESTIONS" },
    { term: "TY/EC", definition: "THANK YOU/END CALL" },
    { term: "TERM", definition: "TERMED CALL" },
    { term: "BAL", definition: "BALANCE" },
    { term: "PA", definition: "PAYMENT ARRANGEMENT" },
    { term: "GFP", definition: "GOOD FAITH PAYMENT" },
    { term: "PIF", definition: "PAID IN FULL" },
    { term: "BIF", definition: "BALANCE IN FULL" },
    { term: "VOD", definition: "VERIFICATION OF DEBT" },
    { term: "IDL", definition: "INITIAL DEMAND LETTER (COAST)" },
    { term: "RCVD", definition: "RECEIVED" },
    { term: "STTD", definition: "STATED" },
    { term: "DEMOS", definition: "DEMOGRAPHICS" }
];

let currentCardIndex = 0;

function displayCard(index) {
    const currentCard = flashcards[index];
    document.querySelector(".card__term").textContent = currentCard.term;
    document.querySelector(".card__definition").textContent = currentCard.definition;
}

function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0; // Loop back to the first card
    }
    displayCard(currentCardIndex);
}

// Initial display of the first card
displayCard(currentCardIndex);