// Question 5 — Login Lockout After Failed Attempts

// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// Sample Input/Output:

// Input: attempts = 2
// Output: 1 attempt left before lockout

// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support

// Input: attempts = 0
// Output: Login successful

let attempt=3
if (attempt===0){
    console.log("Login successful");
} else if (attempt < 3){// here we are checking if the number of attempts is less than 3. if it is less than 3, then we will print the number of attempts left before lockout. if it is equal to 3, then we will print account locked message. if it is greater than 3, then we will also print account locked message.
    console.log(`${3 - attempt} attempt left before lockout`);
} else {
    console.log("🔒 Account Locked — Contact support");
}