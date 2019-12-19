let money = +prompt("Ваш бюджет на месяц"),
    time = +prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpensess: {},
    income:[],
    saving:false
};

let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце"),
    secondAnswer = +prompt("Во сколько обойдется?");

appData.expenses.firstAnswer = secondAnswer;

let day;

day = appData.budget / 30;

alert("Бюджет на 1 день" + day);
