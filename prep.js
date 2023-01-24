// get the increment button element 
const incrementBtn = document.querySelector("#add_btn");
const totalExpenseEle = document.querySelector("#total_expense");
const descEle = document.querySelector("#desc");
const itemListEle = document.querySelector("#item_list");


let totalExpense = 0;
const allExpenses = [];

// Print the initial value of Expense
totalExpenseEle.innerHTML = totalExpense; 

// naming of function should be camelCase
function addExpenseInTotal() { 
    // create an object to hold these items
    let expenseItem = {};

    // get the expense value from input 
    const inputEle = document.querySelector("#input_box");
    const amountValue = inputEle.value;
    const descValue = descEle.value;

    // convert that into number add the value to total expense 
    const expense = parseInt(amountValue, 10);

    // adding both amount and desc to expenseitem object 
    expenseItem.amount = expense;
    expenseItem.desc = descValue;

    // adding item to list 
    allExpenses.push(expenseItem);

    // store the new array in some variables
    const allExpensesHtml = allExpenses.map(exp => {
        return `<div>${exp.desc} - ${exp.amount}</div>`;
    })

    const allExpensesHtmlString =  allExpensesHtml.join(" ");
    itemListEle.innerHTML  = allExpensesHtmlString;

    totalExpense = totalExpense + expense;
    totalExpenseEle.textContent = `Total : ${totalExpense}`; 


}

incrementBtn.addEventListener("click", addExpenseInTotal, false);