class BankAccount {
    // Private fields
    #balance;

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder; // Public
        this.#balance = initialBalance;      // Private
    }

    // Deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`₹${amount} deposited successfully.`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    // Withdraw money
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    // Check balance
    getBalance() {
        return this.#balance;
    }
}

// Create account
const account = new BankAccount("Rahul", 5000);

account.deposit(2000);
account.withdraw(1000);

console.log("Current Balance: ₹" + account.getBalance());

// This will cause an error
// console.log(account.#balance);