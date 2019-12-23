

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
}

start();

let twoWays = 0;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    saving:true
};



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        
        if ((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else if ((typeof(a)) != 'string' || (typeof(a)) == null || (typeof(b)) == null || a == '' || b == '' || a.length > 50) {
            console.log("eror");
            i--;
        }
        
    }
}

chooseExpenses();


/*while (twoWays < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
    if ((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else if ((typeof(a)) != 'string' || (typeof(a)) == null || (typeof(b)) == null || a == '' || b == '' || a.length > 50) {
        console.log("eror");
        twoWays--;
    }
    twoWays++;
}*/


/*do{
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
    if ((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else if ((typeof(a)) != 'string' || (typeof(a)) == null || (typeof(b)) == null || a == '' || b == '' || a.length > 50) {
        console.log("eror");
        twoWays--;
    }
    twoWays++;

}while (twoWays < 2)*/

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert( "Бюджет на 1 день  " + appData.moneyPerDay + " Дата " + appData.timeData );

}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    };
}

detectLevel();

/*
1) Строковые-string, числа-number, символы-symbol, undefined, null, логические-boolean, объекты-object, массивы-array
2)consol.log(таким способом можно вывести инфу в консоль); 
3) оператор или || пока хоть одна из двух сторон оператора или || равна true, она всегда будет true.
оператор и && пока две стороны не будут равны true, оператор и && не будет равна true.
*/

function chekSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

chekSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
    // for (let i = 0; i < 2; i++) {
    //     let a = prompt("Статья необязательных расходов?", ''),
    //         b = prompt("Ответ на вопрос", '');   
        
    //     if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    //         appData.expenses[a] = b;
    //     } else {
    //         i--;   
    //     }
    // };
}