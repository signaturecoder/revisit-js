// get the increment button element 
const incrementBtn = document.querySelector("#add_btn");
const totalExpenseEle = document.querySelector(".total-expense");
const descEle = document.querySelector("#desc");
const itemListEle = document.querySelector(".list-group");


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
    const date = new Date();

    // convert that into number add the value to total expense 
    const expense = parseInt(amountValue, 10);

    // adding both amount and desc to expenseitem object 
    expenseItem.amount = expense;
    expenseItem.desc = descValue;
    expenseItem.moment = date;

    // adding item to list 
    allExpenses.push(expenseItem);

    // store the new array in some variables
    renderList(allExpenses);

    totalExpense = totalExpense + expense;
    totalExpenseEle.textContent = `Total : ${totalExpense}`; 

    // empty the field
    inputEle.value = "";
    descEle.value = "";

}

incrementBtn.addEventListener("click", addExpenseInTotal, false);


// Controller Functions
function getDateString(momento) {
    return momento.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Render List
function renderList(itemList) {
    const allExpensesHtml = itemList.map(exp => createItemList(exp))
    const allExpensesHtmlString =  allExpensesHtml.join(" ");
    itemListEle.innerHTML  = allExpensesHtmlString;
}

// Remove Item
function removeItem(dateValue) {
    const filteredList = allExpenses.filter(item => item.moment.valueOf() !== dateValue);
    renderList(filteredList);
}

/**
 * View Layer -- separating the view layer from logic and vice-versa
 * @param {desc} description of item
 * @param {amount} amount of item
 * @returns list item 
 */

function createItemList({desc, amount, moment}) {
    return `<li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                    ${desc}
                    <small class="text-muted">${getDateString(moment)}</small>
                </div>
                <div>
                    <span class="px-5">
                        ${amount}
                    </span>
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="removeItem(${moment.valueOf()})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>`
}

