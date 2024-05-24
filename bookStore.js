let bookList = [
    {
        name: "The Alchemist",
        price: 200,
        status: "available",
        quantity: 5,
        id: 1
    },
    {
        name: "It Ends With Us",
        price: 120,
        status: "available",
        quantity: 7,
        id: 2
    },
    {
        name: "To Kill a Mockingbird",
        price: 80,
        status: "available",
        quantity: 8,
        id: 3
    },
    {
        name: "Rich Dad Poor Dad",
        price: 90,
        status: "available",
        quantity: 4,
        id: 4
    },
    {
        name: "Silent Voice",
        price: 55,
        status: "available",
        quantity: 9,
        id: 5
    },
    {
        name: "Harry Potter",
        price: 100,
        status: "available",
        quantity: 11,
        id: 6
    },]

let cartList = [];

let option;

function displayMenu() {
    console.log("1. Show Available Books\n2. Add Book\n3. Show Cart\n4. Exit");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function displayBookidOption() {
    console.log("Provide your Book Id which you want To Add\n");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function displayQuantityOption() {
    console.log("Provide Your Quantity\n");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function displayNewQuantityOption() {
    console.log("Again Provide Your Quantity within the available quantity\n");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function showAvailableBooks() {
    console.log(`
+------+--------------------+-------+----------+------------+
| id   |        Name       | Price | Status | Quantity |
+------+--------------------+-------+----------+------------+`);
    bookList.map(({ name, price, status, quantity, id }) => {
        if (quantity === 0) {
            status = "unavailable";
        }
        if (status == "available") {
            console.log(`
+------+--------------------+-------+----------+------------+
| ${id} |      ${name}     | ${price} | ${status} | ${quantity}
+------+--------------------+-------+----------+------------+`);
        }

    })

    console.log("All the available books have shown suuccessfully\n");
}

function bookAddFunc() {
    let idInput = displayBookidOption();
    let quantityInput = displayQuantityOption();
    let actualQuantity = 0;
    let newQuantityInput = 0;
    bookList.map((book) => {

        if (book.id === idInput) {
            actualQuantity = book.quantity;
            if (quantityInput <= actualQuantity) {
                cartList[cartList.length] = { ...book };
                book.quantity = book.quantity - quantityInput;

                cartList.map((cartBook) => {
                    cartBook.quantity = quantityInput;
                })
            } else {
                console.log(`Provided quantity is unavailable\n The present quantity is ${actualQuantity}`);
                newQuantityInput = displayNewQuantityOption();

                cartList[cartList.length] = { ...book }
                book.quantity = book.quantity - newQuantityInput;

                cartList.map((cartBook) => {
                    cartBook.quantity = newQuantityInput;
                })
            }

        }


    })
}

function printCartItems() {
    let total = 0;
    console.log(`
+------+--------------------+-------+----------+------------+
| id   |        Name       | Price | Status | Quantity | Total Price
+------+--------------------+-------+----------+------------+`);
    cartList.map(({ id, price, name, quantity }) => {

        total = price * quantity;
        console.log(`
+------+--------------------+-------+----------+------------+
| ${id}   |     ${name}    | ${price}  | ${quantity} | ${total}
+------+--------------------+-------+----------+------------+`);
    })

    console.log(`
+------+--------------------+-------+----------+------------+
|            TOTAL CART VALUE          ||     ${total}
+------+--------------------+-------+----------+------------+`);
}

function exit() {
    console.log("You have logged out successfully \n");
    return;
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
option = displayMenu();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (option === 1) {
    showAvailableBooks();
    option = displayMenu()
}

if (option === 2) {
    bookAddFunc();
    console.log("We Have successfully Added The Book To The Cart\n")

    option = displayMenu();

    if (option === 1) {
        showAvailableBooks();
        option = displayMenu()
    }

}

if (option === 3) {
    if (cartList.length == 0) {
        console.log("Cart is Empty Nothing to Show First Add Items To the Cart\n");
        option = displayMenu()
    } else {
        printCartItems();

        option = displayMenu(); 444444444
    }

    if (option == 2) {
        bookAddFunc();
        console.log("We Have successfully Added The Book To The Cart\n")

        option = displayMenu();

        if (option === 3) {
            printCartItems();
            option = displayMenu();
        }

        if (option === 1) {
            showAvailableBooks();
        }
    }

    if (option === 1) {
        showAvailableBooks();
    }

}

if (option === 4) {
    exit();
}

