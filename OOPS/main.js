function BankAccount(customerName , balance = 0){

    // properties
    this.customerName = customerName;
    this.accontNumber = Date.now();
    this.balance = balance;

    //methods
    this.deposit = function(amount){
        this.balance += amount
    }
    this.withdraw = function(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        }
        else{
            alert('insuficient balance');
        }
    }

}

// const sumitAccount = new BankAccount('sumit sharma',2000)
// const vivekAccount = new BankAccount('vivek',10000)

// sumitAccount.deposit(3000)
// vivekAccount.deposit(100)




const accontForm = document.querySelector('#accountForm')
const user = document.querySelector('#Name')
const balance = document.querySelector('#balance')

let accounts = [];
accontForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = new BankAccount(user.value , +balance.value)
    accounts.push(account)
    user.value = ''
    balance.value = ''
    console.log(accounts)
})


const depositForm = document.querySelector('#depositForm')
const accountNo = document.querySelector('#accountNo')
const amount = document.querySelector('#Amount')

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = accounts.find((account)=> account.accontNumber === +accountNo.value)
    account.deposit(+amount.value)
    console.log(accounts)
})

const WithdrawForm = document.querySelector('#WithdrawForm')
const accountNo_withdraw = document.querySelector('#accountNo_withdraw')
const Amount_withdraw = document.querySelector('#Amount_withdraw')


WithdrawForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account =  accounts.find((account)=>{
        return account.accontNumber === +accountNo_withdraw.value;
    })

    account.withdraw(+Amount_withdraw.value)
    console.log(accounts)
})