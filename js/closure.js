const bank = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    widthdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};

const CityBank = bank("Karim");
console.log(CityBank.deposit(100));
console.log(CityBank.deposit(55));
console.log(CityBank.widthdraw(30));
console.log(CityBank.deposit(444));
console.log(CityBank.widthdraw(50));
