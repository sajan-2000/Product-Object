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
let updateInput;
let updateOptionInput;
let reEnter;
let increaseInput;
let option;
let againQuantiyAsk;

let decreaseInput;

function displayMenu() {
    console.log("1. Show Available Books\n2. Add Book\n3. Show Cart\n4. Update Cart\n5. Exit");
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

function askQuantity() {

}

function updationOptions() {
    console.log("Choose What kind of Operation You want To do");
    console.log("1. Increase\n2. Decrease\n3. Remove");
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

// function displayMenu() {
//     console.log("1. Show Available Books\n2. Add Book\n3. Show Cart\n4. Update Cart\n5. Exit");
//     const readline = require("readline-sync");
//     let input = readline.questionInt();
//     return input;
// }

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

function increaseQuantity() {
    console.log("Enter The Increase Quantity");
    increaseInput = getInput();

    bookList.map((mainBook) => {
        if (mainBook.id === updateInput) {
            if (increaseInput <= mainBook.quantity) {
                cartList.map((cartBook) => {
                    cartBook.quantity = cartBook.quantity + increaseInput;
                    console.log("Successfully increased");
                    console.log(cartList);
                })
                mainBook.quantity = mainBook.quantity - increaseInput;
                console.log(mainBook);

            } else {
                if (mainBook.quantity === 0) {
                    console.log("It is unavailable you cant increase");
                } else {
                    console.log(`That much quantity is not there only ${mainBook.quantity} pcs available`);

                    console.log("Please provide valid quantity");
                    againQuantiyAsk = getInput();

                    bookList.map((againBook) => {
                        if (againBook.id === updateInput) {
                            if (againQuantiyAsk <= againBook.quantity) {
                                cartList.map((cartBook) => {
                                    cartBook.quantity = cartBook.quantity + againQuantiyAsk;
                                    console.log("Successfully increased\n");
                                    console.log("Cartlist Items");
                                    console.log(cartList);
                                })
                                mainBook.quantity = mainBook.quantity - againQuantiyAsk;
                                console.log("Book store book\n");
                                console.log(mainBook);
                            } else {
                                console.log("I told you its not available now again start");
                            }
                        }
                    })
                }



            }
        }
    })
}

function decreaseQuantity() {
    console.log("Enter The Decrease Quantity");
    decreaseInput = getInput();

    cartList.map((cartBook) => {

        if (decreaseInput <= cartBook.quantity) {
            cartBook.quantity = cartBook.quantity - decreaseInput;
            console.log("Successfully decreased\n");
            console.log(cartBook);
            bookList.map((book) => {
                if (book.id === updateInput) {
                    book.quantity += decreaseInput;
                    console.log(book);
                }
            })
        } else {
            console.log(`Invalid decrease anmount only ${cartBook.quantity} pcs are there to decrease`);
            console.log("Provide valid decrease amount");
            decreaseInput = getInput()

            cartList.map((cartBook) => {

                if (decreaseInput <= cartBook.quantity) {
                    cartBook.quantity = cartBook.quantity - decreaseInput;
                    console.log(cartBook);

                    bookList.map((book) => {
                        if (book.id === updateInput) {
                            book.quantity += decreaseInput;
                            console.log(book);
                        }
                    })
                }
            })
        }
    })

}

function removeItem() {
    let cartBookId = 0;
    let cartBbookQuantity = 0;
    cartList.shift()
    console.log("Succefully removed");
    console.log(cartList);

    cartList.map((cartBook) => {
        cartBookId = cartBook.id;
        cartBbookQuantity = cartBook.quantity;
    })

    bookList.map((book) => {
        if (book.id === cartBookId) {
            book.quantity += cartBbookQuantity;
        }

    })
}

function option4() {
    if (cartList.length > 0) {
        console.log("Enter book id that you want to update");
        updateInput = getInput();

        cartList.map((book) => {
            if (book.id === updateInput) {

                updateOptionInput = updationOptions();
                if (updateOptionInput === 1) {
                    increaseQuantity()
                    option = displayMenu();
                }
                if (updateOptionInput === 2) {
                    decreaseQuantity();
                    option = displayMenu();
                }
                if (updateOptionInput === 3) {
                    removeItem();
                    option = displayMenu();
                }

                if (option === 1) {
                    showAvailableBooks();
                    option = displayMenu()
                }

                if (option === 3) {
                    printCartItems();
                    option = displayMenu()
                    chooseMainMenuOption(option);
                }
            } else {
                console.log("This book is not inside There\n");
                console.log("ReEnter your Book ID correctly");
                updateInput = getInput();

                cartList.map((book) => {
                    if (book.id === updateInput) {
                        updateOptionInput = updationOptions();

                        if (updateOptionInput === 1) {
                            increaseQuantity()
                            option = displayMenu()
                            chooseMainMenuOption(option);
                        }
                        if (updateOptionInput === 2) {
                            decreaseQuantity();
                            option = displayMenu()
                            chooseMainMenuOption(option);
                        }
                        if (updateOptionInput === 3) {
                            removeItem();
                            option = displayMenu()
                            chooseMainMenuOption(option);
                        }
                    }
                })
            }
        })

    } else {
        console.log("You don't have anything inside your Cart kindly add something");
        option = displayMenu();

        if (option === 2) {
            bookAddFunc();
            console.log("We Have successfully Added The Book To The Cart\n")

            console.log("Now you can update\n");
            option = displayMenu();

            if (option === 4) {
                console.log("Enter book id that you want to update");
                updateInput = getInput();

                cartList.map((book) => {
                    if (book.id === updateInput) {

                        updateOptionInput = updationOptions();
                        if (updateOptionInput === 1) {
                            increaseQuantity()
                            option = displayMenu();
                        }
                        if (updateOptionInput === 2) {
                            decreaseQuantity();
                            option = displayMenu();
                        }
                        if (updateOptionInput === 3) {
                            removeItem();
                            option = displayMenu();
                        }

                        if (option === 1) {
                            showAvailableBooks();
                            option = displayMenu()
                        }

                        if (option === 3) {
                            printCartItems();
                            option = displayMenu();
                        }

                    } else {
                        console.log("This book is not inside There\n");
                        console.log("ReEnter your Book ID correctly");
                        updateInput = getInput();

                        cartList.map((book) => {
                            if (book.id === updateInput) {
                                updateOptionInput = updationOptions();

                                if (updateOptionInput === 1) {
                                    increaseQuantity();
                                    option = displayMenu()
                                    chooseMainMenuOption(option)
                                }
                                if (updateOptionInput === 2) {
                                    decreaseQuantity();
                                    option = displayMenu()
                                    chooseMainMenuOption(option)
                                }
                                if (updateOptionInput === 3) {
                                    removeItem();
                                    option = displayMenu()
                                    chooseMainMenuOption(option);
                                }
                                option = displayMenu()
                                chooseMainMenuOption(option)
                            }
                        })
                    }
                })
            }
        }

    }
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

    if (option === 3) {
        printCartItems();
    }
}

if (option === 3) {
    if (cartList.length == 0) {
        console.log("Cart is Empty Nothing to Show First Add Items To the Cart\n");
        option = displayMenu()
    } else {
        printCartItems();

        option = displayMenu();
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
function getInput() {
    const readline = require("readline-sync");
    let input = readline.questionInt();
    return input;
}

function chooseMainMenuOption(option) {
    switch (option) {
        case 1:
            showAvailableBooks();
            break;
        case 2:
            console.log("Already added");
            break;
        case 3:
            printCartItems();
            break;
        case 4:
            option4();

    }
}

if (option === 4) {
    option4();
}



if (option === 5) {
    exit();
}

