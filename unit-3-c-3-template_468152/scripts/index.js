// Store the wallet amount to your local storage with key "amount"



let amount = JSON.parse(localStorage.getItem("amount"));

document.getElementById('wallet').innerText = amount;


function addmoneytowallet() {

    let cash = document.getElementById("amount").value;

    console.log(cash);


    let money = document.getElementById('wallet').innerText;
    money = Number(cash) + Number(amount);


    document.getElementById('wallet').innerText = money;
    console.log(money);


    localStorage.setItem("amount", JSON.stringify((money)));
}



//appending the value to the wallet