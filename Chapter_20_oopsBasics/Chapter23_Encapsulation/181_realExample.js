/**
 * ENCAPSULATION EXAMPLE - PRIVATE FIELDS IN JAVASCRIPT
 * 
 * Encapsulation is hiding internal details and only exposing what's necessary.
 * Private fields (#) prevent direct access from outside the class.
 * This maintains data integrity and provides controlled access through getters/setters.
 */

// ====================================================================
// EXAMPLE 1: SIMPLE PERSON CLASS WITH ENCAPSULATION
// ====================================================================

class Person {
    // Private fields (hidden from outside access)
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    // Getter - Controlled read access to private field
    getChild1() {
        return this.#child1;
    }

    // Setter - Controlled write access to private field
    setChild1(changed_name) {
        this.#child1 = changed_name;
    }

    // Getter for child2
    getChild2() {
        return this.#child2;
    }

    // Setter for child2
    setChild2(changed_name) {
        this.#child2 = changed_name;
    }

    // Display all info
    displayInfo() {
        console.log(`Parent: ${this.name}`);
        console.log(`Child 1: ${this.#child1}`);
        console.log(`Child 2: ${this.#child2}`);
    }
}

console.log("=== BASIC ENCAPSULATION EXAMPLE ===\n");

// Create person object
let p = new Person("Prasod", "Vraj", "Jenny");

// Access using getter methods (controlled access)
console.log("Accessing children through getters:");
console.log("Child 1:", p.getChild1());
console.log("Child 2:", p.getChild2());

// Cannot access private fields directly (will throw error if uncommented)
// console.log(p.#child1);  // SyntaxError: Private field '#child1' must be declared

console.log("\nInitial Info:");
p.displayInfo();

// Modify using setter methods (controlled modification)
console.log("\nModifying children through setters:");
p.setChild1("Raj");
p.setChild2("Priya");

console.log("Updated Info:");
p.displayInfo();

// ====================================================================
// EXAMPLE 2: BANK ACCOUNT - MORE REALISTIC ENCAPSULATION
// ====================================================================

class BankAccount {
    #balance;
    #accountNumber;
    #pin;

    constructor(accountNumber, initialBalance, pin) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#pin = pin;
        this.accountHolder = ""; // Public property
    }

    // Getter for balance (read-only access)
    getBalance() {
        return this.#balance;
    }

    // Deposit money (validation and updates)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`✓ Deposited: $${amount}`);
            console.log(`New Balance: $${this.#balance}`);
        } else {
            console.log("✗ Invalid deposit amount");
        }
    }

    // Withdraw money (with PIN verification)
    withdraw(amount, pin) {
        if (pin !== this.#pin) {
            console.log("✗ Invalid PIN");
            return;
        }
        
        if (amount > this.#balance) {
            console.log("✗ Insufficient balance");
            return;
        }

        if (amount > 0) {
            this.#balance -= amount;
            console.log(`✓ Withdrawn: $${amount}`);
            console.log(`Remaining Balance: $${this.#balance}`);
        } else {
            console.log("✗ Invalid withdrawal amount");
        }
    }

    // Change PIN (secure)
    changePIN(oldPin, newPin) {
        if (oldPin !== this.#pin) {
            console.log("✗ Old PIN is incorrect");
            return;
        }
        this.#pin = newPin;
        console.log("✓ PIN changed successfully");
    }

    // Get account info
    getAccountInfo() {
        return {
            accountNumber: this.#accountNumber,
            holder: this.accountHolder,
            balance: this.#balance
        };
    }
}

console.log("\n=== BANK ACCOUNT ENCAPSULATION EXAMPLE ===\n");

const account = new BankAccount("ACC123456", 5000, 1234);
account.accountHolder = "John Doe";

console.log("Account Info:", account.getAccountInfo());

console.log("\n--- Deposit Operation ---");
account.deposit(1000);

console.log("\n--- Withdraw with correct PIN ---");
account.withdraw(500, 1234);

console.log("\n--- Attempt withdraw with wrong PIN ---");
account.withdraw(300, 9999);

console.log("\n--- Change PIN ---");
account.changePIN(1234, 5678);
console.log("✓ PIN changed, old pin no longer works:");
account.withdraw(200, 1234);
console.log("✓ New PIN works:");
account.withdraw(200, 5678);

// ====================================================================
// EXAMPLE 3: STUDENT CLASS - VALIDATION WITH ENCAPSULATION
// ====================================================================

class Student {
    #gpa;
    #studentId;
    #grades = [];

    constructor(name, studentId) {
        this.name = name;
        this.#studentId = studentId;
        this.#gpa = 0;
    }

    // Add grade with validation
    addGrade(subject, grade) {
        if (grade < 0 || grade > 100) {
            console.log("✗ Invalid grade (0-100 only)");
            return;
        }
        
        this.#grades.push({ subject, grade });
        this.#calculateGPA();
        console.log(`✓ Grade added for ${subject}: ${grade}`);
    }

    // Calculate GPA (private calculation)
    #calculateGPA() {
        if (this.#grades.length === 0) {
            this.#gpa = 0;
            return;
        }
        
        const total = this.#grades.reduce((sum, g) => sum + g.grade, 0);
        this.#gpa = (total / this.#grades.length).toFixed(2);
    }

    // Getter for GPA
    getGPA() {
        return this.#gpa;
    }

    // Getter for grades
    getGrades() {
        return [...this.#grades]; // Return copy, not reference
    }

    // Display student report
    displayReport() {
        console.log(`\n--- ${this.name}'s Report ---`);
        console.log(`Student ID: ${this.#studentId}`);
        console.log(`Grades:`);
        this.#grades.forEach(g => {
            console.log(`  ${g.subject}: ${g.grade}`);
        });
        console.log(`GPA: ${this.#gpa}`);
    }
}

console.log("\n=== STUDENT CLASS ENCAPSULATION EXAMPLE ===\n");

const student = new Student("Alice", "STU001");

console.log("Adding grades:");
student.addGrade("Math", 95);
student.addGrade("Science", 87);
student.addGrade("English", 92);
student.addGrade("History", 88);

student.displayReport();

console.log("\nAttempting invalid grade:");
student.addGrade("Art", 150);

console.log("\nFinal GPA:", student.getGPA());

// ====================================================================
// WHY ENCAPSULATION IS IMPORTANT
// ====================================================================

/**
 * BENEFITS OF ENCAPSULATION:
 * 
 * 1. DATA PROTECTION
 *    - Private fields cannot be accessed directly
 *    - Prevents accidental modification from outside
 * 
 * 2. VALIDATION
 *    - Setters can validate data before accepting it
 *    - Bank balance cannot go negative
 *    - Grades must be 0-100
 * 
 * 3. MAINTAINABILITY
 *    - Can change internal implementation without affecting external code
 *    - If we change how balance is stored, only internal methods are affected
 * 
 * 4. CONTROLLED ACCESS
 *    - Some fields are read-only (getters only)
 *    - Some require verification (PIN before withdrawal)
 * 
 * 5. HIDING COMPLEXITY
 *    - User doesn't need to know HOW GPA is calculated
 *    - Just call getGPA() and get the result
 * 
 * WITHOUT ENCAPSULATION:
 * account.balance = -10000;  // Disaster! Negative balance!
 * student.gpa = 5.0;         // Invalid GPA!
 * account.pin = "12345";     // Security breach!
 * 
 * WITH ENCAPSULATION:
 * account.withdraw(100, pin);  // Secure, validated
 * student.addGrade(...);       // Validated, auto-calculates GPA
 */

console.log("\n=== KEY DIFFERENCES ===\n");
console.log("Private Field Syntax: #fieldName");
console.log("Private Methods: #methodName() { }");
console.log("Only accessible within the class");
console.log("Cannot be accessed from outside (even in subclasses by default)");
console.log("\nPublic Fields/Methods: no # prefix");
console.log("Accessible from anywhere");
