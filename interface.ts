class Customer {
    shoppingCartStatus: ShoppingCartStatus;
    shoppingCartProducts: Product[];
    listOfTransactions: Transaction[];
    constructor(public firstName: string, public lastName: string, public address: string){}
}

interface Person {
    firstName: string;
    lastName: string;
    address: string;
}

class Product {
    constructor(public productNumber: string, public productPrice: number ){
    }
}

interface Product {
    productNumber: string;
    productPrice: number;
}

enum ShoppingCartStatus {
    current,
    pending
}

interface PurchasedProduct {
    productNumber: string;
    paidPrice: number;
}

interface Transaction {
    purchasedProducts: PurchasedProduct[];
}

//Create a function that will go over the list of all the Customers, and check their Shopping Cart.
//If the Shopping Cart is in the Current state, nothing is done; if the Shopping Cart is in the Pending state,
//the function takes that Cart, process it into a Transaction, saves the Transaction in the list of 
//Transactions of that Customer, then resets the Shopping Cart to Current without any Products inside. 
const application = () => {

}

//Create customers and products

//products
const computer = new Product("001", 1000);
const iPad = new Product("002", 900);
const iPhone = new Product("003", 1000);
const scarf = new Product("004", 30);
const watch = new Product("005", 200);
const dishWasher = new Product("006", 2000);

//customers
const josh = new Customer("Josh", "Dunffy", "120 Avenue Piaff");
josh.shoppingCartStatus = ShoppingCartStatus.current;
josh.shoppingCartProducts = [computer, iPad, iPhone];


const ruth = new Customer("Ruth", "Belle", "360 Avenue Q");
ruth.shoppingCartStatus = ShoppingCartStatus.pending;
ruth.shoppingCartProducts = [scarf, watch, dishWasher];


const david = new Customer("David", "Lu", "900 Rue Guy Concordia");
david.shoppingCartStatus = ShoppingCartStatus.pending;
david.shoppingCartProducts = [scarf, iPhone];

console.log(david)




