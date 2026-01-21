let amounts = process.argv[2];
console.log('₹ -> amounts:', amounts);

class BankAccount {
  #balance; // private property
  #Pin;     // private property

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
    this.#balance = 0;
    this.#Pin = '1234';
  }

  // Public method - visible to users
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}`);
    } else {
      console.log('Invalid deposit amount');
    }
  }

  // Public method - visible to users
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ₹${amount}`);
    } else {
      console.log('Insufficient balance');
    }
  }

  // Public method to show limited detail
  checkBalance(userPin) {
    if (userPin === this.#Pin) {
      // console.log(`Current balance: ₹${this.#balance}`);
      return `Current balance: ₹${this.#balance}`;
    } else {
      console.log(`Pin galat hai greeb ${userPin}`);
    }
  }
}

// Create an account
const account = new BankAccount('Rishabh');

account.deposit(amounts);
account.withdraw(400);
let checkBal = account.checkBalance(`1234`);
console.log('₹ -> checkBal:', checkBal);

