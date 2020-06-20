const user = {
    name: "Gustavo",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)
    if(transaction.type === 'credit'){
        user.balance += transaction.value
    }else{
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(typeTransaction){
    let higher = {type: typeTransaction, value: 0}
    for(let transaction of user.transactions){
        if(transaction.type === typeTransaction && transaction.value > higher.value){
            higher = transaction
        }
    }
    return higher
}

function getAverageTransactionValue(){
    let sum = 0
    for(let transaction of user.transactions){
        sum += transaction.value
    }
    const average = sum / user.transactions.length
    return average
}

function getTransactionsCount(){
    let cont = {credit: 0, debit: 0}
    for( let transaction of user.transactions){
        if(transaction.type === 'credit'){
            cont.credit++
        }else{
            cont.debit++
        }
    }
    return cont
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60
console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());