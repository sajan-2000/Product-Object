let books = [
    {
        name: "The Alchemist",
        price: 30,
        status: "available",
        quantity: 5,
        id: 121
    },
    {
        name: "It Ends With Us",
        price: 20,
        status: "available",
        quantity: 7,
        id: 122
    },
    {
        name: "To Kill a Mockingbird",
        price: 50,
        status: "available",
        quantity: 8,
        id: 123
    },
    {
        name: "1984",
        price: 20,
        status: "available",
        quantity: 7,
        id: 124
    },
    {
        name: "Silent Voice",
        price: 20,
        status: "available",
        quantity: 7,
        id: 125
    },
    {
        name: "Harry Potter",
        price: 20,
        status: "available",
        quantity: 7,
        id: 126
    },]

let option;

function displayMenu() {
    console.log("1. Show Available Books\n2. Add Book\n3. Show Cart\n4. Exit");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}