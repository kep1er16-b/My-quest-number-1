// #1

// let money = prompt('Ваш бюджет на месяц?');
// let time = prompt('Введите дату в формате YYYY-MM-DD', "YYYY-MM-DD");

// #4

// let expenses = {
//     expensesMoontly: prompt('Введите обязательную статью расходов в этом месяце'),
//     expensesHowMuch: prompt("Во сколько обойдется?")
// };

// #3

var appData = {
    money: +prompt("Ваш бюджет на месяц?", "0"),
    time: prompt('Введите дату в формате YYYY-MM-DD', "YYYY-MM-DD"),
    expenses: {
            expensesMoontly: prompt('Введите обязательную статью расходов в этом месяце'),
            expensesHowMuch: prompt("Во сколько обойдется?"),
            expensesMoontly1: prompt('Введите обязательную статью расходов в этом месяце'),
            expensesHowMuch1: prompt("Во сколько обойдется?")
        },
    optionalExpenses: "",
    income: [''],
    savings: 0     
    };
    
    alert(appData.money/30);