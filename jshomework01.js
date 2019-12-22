let money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let twoWays = 0;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpensess: {},
    income:[],
    saving:false
};



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


/*while (twoWays < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
    if ((typeof(a)) == 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else if ((typeof(a)) != 'string' || (typeof(a)) == null || (typeof(b)) == null || a == '' || b == '' || a.length > 50) {
        console.log("eror");
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
    }
    twoWays++;

}while (twoWays < 2)*/


appData.moneyPerDay = appData.budget / 30;

alert( "Бюджет на 1 день  " + appData.moneyPerDay + " Дата " + appData.timeData );

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};

/*
1) Строковые-string, числа-number, символы-symbol, undefined, null, логические-boolean, объекты-object, массивы-array
2)consol.log(таким способом можно вывести инфу в консоль); 
3) оператор или || пока хоть одна из двух сторон оператора или || равна true, она всегда будет true.
оператор и && пока две стороны не будут равны true, оператор и && не будет равна true.
*/
