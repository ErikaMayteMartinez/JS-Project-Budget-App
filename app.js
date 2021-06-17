class UI {
    constructor() {

      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("budget-amount");
      this.expenseAmount = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expense-list");
      this.itemList = [];
      this.itemID = 0;
    }

  }

  function eventListeners() {
const budgetForm = document.getElementByID('budget-form');
const expenseForm = document.getElementByID('expense-form');
const expenseList = document.getElementByID('expense-list');

//new instance of UI CLASS
const ui = new UI()


// budget form submit
budgetForm.addEventListener('submit', function(event){
  event.preventDefault();
})

//expense form submit
expenseForm.addEventListener('submit', function(event){
  event.preventDefault();
})

//expense click
expenseList.addEventListener('click', function() {});
  }

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});