var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    return Customer;
}());
var Product = /** @class */ (function () {
    function Product(productNumber, productPrice) {
        this.productNumber = productNumber;
        this.productPrice = productPrice;
    }
    return Product;
}());
var ShoppingCartStatus;
(function (ShoppingCartStatus) {
    ShoppingCartStatus[ShoppingCartStatus["current"] = 0] = "current";
    ShoppingCartStatus[ShoppingCartStatus["pending"] = 1] = "pending";
})(ShoppingCartStatus || (ShoppingCartStatus = {}));
//Create a function that will go over the list of all the Customers, and check their Shopping Cart.
//If the Shopping Cart is in the Current state, nothing is done; if the Shopping Cart is in the Pending state,
//the function takes that Cart, process it into a Transaction, saves the Transaction in the list of 
//Transactions of that Customer, then resets the Shopping Cart to Current without any Products inside. 
var application = function () {
};
//Create customers and products
//products
var computer = new Product("001", 1000);
var iPad = new Product("002", 900);
var iPhone = new Product("003", 1000);
var scarf = new Product("004", 30);
var watch = new Product("005", 200);
var dishWasher = new Product("006", 2000);
//customers
var josh = new Customer("Josh", "Dunffy", "120 Avenue Piaff");
josh.shoppingCartStatus = ShoppingCartStatus.current;
josh.shoppingCartProducts = [computer, iPad, iPhone];
var ruth = new Customer("Ruth", "Belle", "360 Avenue Q");
ruth.shoppingCartStatus = ShoppingCartStatus.pending;
ruth.shoppingCartProducts = [scarf, watch, dishWasher];
var david = new Customer("David", "Lu", "900 Rue Guy Concordia");
david.shoppingCartStatus = ShoppingCartStatus.pending;
david.shoppingCartProducts = [scarf, iPhone];
console.log(david);
