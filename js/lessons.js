"use strict"; /* директива указывающая, что мы работаем в современном режиме. Прописывать её нужно в начале страницы или в начале функции. */

/* переменные объявляем через let(изменяемая переменная) или const(не изменяемая переменная) */
let number = 5;
const leftBorderWidth = 1;
/* ----------------------------------------------------------------------------------------------------------------------------------------------
1 урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Первая практика: */

const numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", ""); //ПЕРВЫЙ ВОПРОС ПОЛЬЗОВАТЕЛЮ
const personalMovieDB = { //создал объект, дальше идёт перчисление его свойств.
    count: numbersOfFilms, //1-е свойство с переменной из 1 вопроса.
    movies: {}, //2-е с пустым объектом
    actors: {}, //3-е с пустым объектом
    genres: [], //4-е с пустым массивом
    privat: false //5-е с булиновым значением false
};

//пременные можно объявлять списком
let film1 = prompt('Один из последних просмотренных фильмов?', ''), //1-я переменная 
     RatingOfFilm1 = +prompt('На сколько оцените его?', ''), //2-я
     film2 = prompt('Один из последних просмотренных фильмов?', ''), //3-я
     RatingOfFilm2 = +prompt('На сколько оцените его?', ''); //4-я

personalMovieDB.movies[film1] = RatingOfFilm1; //записывать свойства в объект лучше через квадратные скобки. Во избежания багов
personalMovieDB.movies[film2] = RatingOfFilm2;

console.log(personalMovieDB); //вывод составленного объекта в консоль
/* -----------------------------------------------------------------------------------------------------------------------------------------------
2 урок: условия */
/* обычный пример if else */
if (4 == 9) {
    console.log("ok");
} else {
    console.log("error");
}

/* Пример if else с несколькими проверками разных условий. */
const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("ok");
}
/* запись условий при помощи ТЕРНАРНОГО оператора. В работе тернарного оператора учавствует 3 аргумента (Условие ? действие если верно : действие если неверно); */
/* условие   действие если верно  действие если неверно */
(num === 50) ? console.log("ok again") : console.log("error");

/* С помощью конструкции switch можно создавать строгие проверки с большим кол-вом условий. Работает так-же как if else, но занимает меньше места\кода */
const num = 50; 
switch (num) { //С помощью конструкции switch можно содавать ТОЛЬКО строгие проверки. (Совпасть должны типы данных и их значения)
    case 49: //Условие
        console.log('Неверно');
        break; //обязательная отметка break
    case 100: 
        console.log('Неверно');
        break;
    case 50: 
        console.log('Верно');
        break;
    default: //Условие, которое выполнится, если ниодно предыдущее условие не правдиво.
        console.log('Сравнение закончено');
        break;
}
/* -----------------------------------------------------------------------------------------------------------------------------------------------
3 урок: Циклы */

/* 1 пример */
let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

/* 2 пример */
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

/* 3 пример */
let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* 2 практика: */

const numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
const personalMovieDB = { 
    count: numbersOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
};
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''), 
        b = +prompt('На сколько оцените его?', '');
        if (a == "" || b == "" || a.length > 50 || a == null || b == null) {
            alert('Введены неккоректные данные');
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
}
if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
console.log(personalMovieDB);

/* -----------------------------------------------------------------------------------------------------------------------------------------------
4 урок: функции, стрелочные функции (ES6) 
Функции начинают работать до начала выполнения самого кода, таки образом можно использовать функции до их объявления. Но лучше выносить все функции в отдельный файл и подключать к проекту отдельно*/

/* 1 пример */
let num = 30;

console.log(num); //вывод начального значения num

function showFirstMessage(text) { //создание функции
    console.log(text);
    num = 20; //глобальные переменные можно изменять внутрии функций и использовать дальше в программе. Локальные переменные (созданные внутри функции) будут работать только в нутри самой функции.
}

showFirstMessage('Hello world'); //вызов функции
console.log(num); //проверка, что значение num измененно

/* 2 пример */
function calc(a, b) {
    return (a + b); //Оператор return завершает выполнение текущей функции и возвращает её значение. Код после оператора return выпольняться не будет.
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(9, 8));

/* 3 пример */

function ret() {
    let num =  50;
    return num;
}

const anothetNum = ret();
console.log(anothetNum);

/* 4 пример */

const logger = function() { //создаётся переменная и в её значение передаётся функция. Такие функции можно сипользовать только после объявления.
    console.log('Hello');
};
logger();


/* 5 пример - стрелочная функция */

const calc = (a, b) => {
    console.log('2');
    return a + b;
};

/* -----------------------------------------------------------------------------------------------------------------------------------------------
5 урок: Методы и свойства строк и чисел */
/* 
1 пример */ 
const str = 'test';
const arr = [1, 2, 4];

console.log(arr.length); //с помощью свойства length можно узнать кол-во символов в объекте или кол-во объектов, если проверяемый объект это массив. */


/* 2 пример */
const str = 'TeSt';
console.log(str.toUpperCase()); //метод toUpperCase возвращает новое значение с буквами в верхнем регистре, изначальная переменная остаётся без изменений.
console.log(str.toLowerCase()); //метод toLowerCase возвращает новое значение с буквами в нижнем регистре, изначальная переменная остаётся без изменений.
console.log(str);

/* 3 пример */
const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); //Метод indexOf осуществляет поиск подстроки (указывается первым параметром) в строке. Метод вернет позицию первого совпадения, а если оно не найдено, то вернет -1. Вторым параметром (он необязателен) можно передать номер символа, откуда следует начинать поиск. Метод чувствителен к регистру символов. С помощью этого метода можно быстро проверить наличие нужного элемента в объекте.

/* 4 пример  */
const logg = "Hello world";
console.log(logg.slice(6, 11)); //Метод slice вырезает и возвращает указанную часть массива\объекта. Первым параметром указывается номер элемента массива, с которого начинается вырезание, а вторым параметром - номер элемента, на котором закончится вырезание (при этом элемент с этим номером не включится в вырезанную часть). Второй параметр не является обязательным. Если его не указать - подмассив возьмется с указанного в первом параметре элемента до конца массива.

/* 5 пример  */
const logg = "Hello world";
console.log(logg.substring(6, 11)); //метод substring() - аналог метода slice позволяет извлечь символы из строки (подстроку) между двумя заданными индексами, или от определенного индекса до конца строки. НЕ ПОДДЕРЖИВАЕТ ОТРИЦАТЕЛЬНЫЕ ЗНАЧЕНИЯ

/* 6 пример */
const logg = "Hello world";
console.log(logg.substr(6, 5)); //метод substr() позволяет извлечь из строки определенное количество символов, начиная с заданного индекса.

/* 7 пример */
const num = 12.2;
console.log(Math.round(num)); //Math - встроенный объект, который предоставляет для использования основные математические константы и функции. Метод round округляет числа.

/* 8 пример */
const test = '12.2px';
console.log(parseInt(test)); //метод parseInt переводит число в другию систему исчесления, обрезая дробные значения.
console.log(parseFloat(test)); //метод parseFloat переводит число в другию систему исчесления, не обрезая дробные значения.


/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
// Код возьмите из предыдущего домашнего задания

/* 3 практика: */

let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", "");

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) { //метод isNaN проверяет значение, если оно не число, возвращает true.
        numbersOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
    }
}

start();

const personalMovieDB = { 
    count: numbersOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
};

function rememberMyFilms() {
    for (var i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''), 
            b = +prompt('На сколько оцените его?', '');
            if (a == "" || b == "" || a.length > 50 || a == null || b == null) {
                alert('Введены неккоректные данные');
                i--;
            } else {
                personalMovieDB.movies[a] = b;
            }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        alert('Ошибка');
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
    }
}    
writeYourGenres();
/* -----------------------------------------------------------------------------------------------------------------------------------------------
6 урок: CallBack функции - это функции, которые начинают работать только после завершения работы предыдущей функции. */

/* 1 пример - обычная функция*/

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


/* 2 пример - callback функция*/

function learnJS(lang, callback) { //Создание callback функции
    console.log(`Я учу: ${lang}`);
    callback();//отметка, что должна выполниться функция
}

learnJS('JavaScript', function() { //Вызов функции с 1 аргументом в виде текста и вторым в виде анонимной функции. Когда вторым аргументом указывается обычная функция, её нужно указывать без (). В данном примерее было-бы  learnJS('JavaScript', functionName); 
    console.log(`Я прошел этот урок`);
});


/* -----------------------------------------------------------------------------------------------------------------------------------------------
7 урок: Объекты, деструктуризация объектов (ES6) */

/* 1 пример */

const options = { //Создание объекта
    name: 'test',
    Width: 1024,
    Height: 1024,
    colors: { //Создание объекта в нутри другого объекта
        border: 'black',
        bg: 'red'
    }
}; 
console.log(options.colors.bg);

delete options.name; //С помощью оператора delete можно удалить объект, свойство объекта или элемент массива. Поскольку в JavaScript нет прямых констант изменеия происходят даже в объекте объевленном через const
console.log(options);

let counter = 0;//Создание счётчика, для подсчёта кол-ва свойств
for (let key in options) { //Цикл for in для перебора ключей в объекте\массиве
    if (typeof(options[key]) === 'object') { //Проверка, является-ли проверяемое свойство объектом
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }   
}

console.log(`Кол-во свойств ${counter}`);


/* 2 пример */

const options = { //Создание объекта
    name: 'test',
    Width: 1024,
    Height: 1024,
    colors: { //Создание объекта в нутри другого объекта
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //Создание метода в ручную.(действие, которые будет осуществлять объект)
        console.log('Метод работает');
    }
}; 
options.makeTest(); //обращение к созданному в ручную методу.
console.log(Object.keys(options)); //Метод Object.keys позволяет получить массив с названиями всех ключей объекта. Если сделать запись с length, можно получить кол-во ключей в цифрах. console.log(Object.keys(options).lenght);

const {border, bg} = options.colors; //пример деструкторизации объетка. Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.
console.log(border);

/* -----------------------------------------------------------------------------------------------------------------------------------------------
8 урок: Массивы и псевдомассивы. */

/* 1 пример */

const arr = [1, 2, 3, 6, 8]; //Создание массива

arr.pop(); //Метод pop удаляет последний элемент массива
arr.push(10); //Метод push добавляет элемент в конец массива

console.log(arr);

//цикл for для перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//метод for of для перебора массива
for (let value of arr) {
    console.log(value);
}
//метод for each с callback функцией для перебора массива. Break и continue не работают в методе forEach
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


/* 2 пример */
const str = prompt('','');
const products = str.split(', '); //Метод split разделяет объект строки на массив, резделитель указывается в качествее аргумента.
console.log(products);
console.log(products.join('; ')); //Метод join соединяет элементы массива в одну строчку. (строковое значение)
console.log(products.sort()); //Метод sort преобразовывает элементы массива в строки и сравнивает их в порядке следования кодовых символов Unicode. Для правильной сортировки чисел, нужно указывать в качестве аргумента функцию с условием return a - b;
function compareNum(a, b) {
    return a - b;
}


/* -----------------------------------------------------------------------------------------------------------------------------------------------
9 урок: Передача по ссылке или по значению, Spread оператор (ES6-ES9)
Примитивные значения (числа, строки, логические значения) передаются по значению. При работе с объектами, значения передаются по ссылке и если изменить переданное значение по ссылке, тогда изменится и исходный объект*/

/* 1 пример */

let a = 5;
    b = a; //передача по значению

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //передача по ссылке

copy.a = 10;

console.log(copy);
console.log(obj);

/* 2 пример. Функция для перебора объекта и создания его поверхностной копии/

Существуют глубокие и поверхностные копии объектов.  */

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //Создание поверхностной копии

newNumbers.a = 10; //Изменения на первом уровне не влияют на ключи-значения начального объекта.
newNumbers.c.x = 10; //Ключи-значения на втором уровне передаются уже по ссылке и будут изменять изначальный объект.

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //С помощью метода Object.assign данные из объекта add добавлены в объект numbers. Используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
console.log(numbers);

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

/* 3 пример. Копия массива */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //метод slice() позволяет возвратить новый массив, который содержит копии элементов, вырезанных из исходного массива.

newArray[1] = '1';
console.log(newArray);
console.log(oldArray);

/* 4 пример. Оператор разворота Spread. Синтаксис ... (три точки + название массива) */

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //Оператор разворота Spread добавляет данные ключей-значений из исходного объекта. Он не вкладывает один массив в другой, он разделяет этот массив на отдельные значения, превращая массив в набор параметров.

console.log(internet);


function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

/* 5 пример. Быстрые копии с помощью Spread */

const array = ['a', 'b'];
const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);


/* -----------------------------------------------------------------------------------------------------------------------------------------------
10 урок: Основы ООП, прототипно-ориентированное наследование - один из стилей объектно ореинтированного программированния (ООП)/
Любые конструкции протативно наследуются от объекта*/

/* 1 пример */
let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

/* 2 пример. Наследование свойств. */

const soldier = { //Создал прототип
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = { //Создал новый объект с изменённый хар-кой.
    health: 100
}

/* jonh.__proto__ = soldier; */ //Устаревшая конструкция, не используется

Object.setPrototypeOf(jonh, soldier); //Актуальная конструкция для наследования свойств. 1 арг - кто наследует, 2 арг - от кого.

console.log(jonh); //Видим только 1 изначальное свойство
console.log(jonh.armor); //Видим второе свойство, унаследованное от прототипа
jonh.sayHello(); //Обращение к ключу SayHello, так же унаследованного объектом john от soldier

/* 3 пример */

const soldier = { //Создал прототип
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier); //Создание нового объекта сразу с указанием его прототипа
jonh.sayHello();


/* -----------------------------------------------------------------------------------------------------------------------------------------------
11 урок: Практика , ч4. Используем объекты */

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = { 
    count: 0, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { //метод isNaN проверяет значение, если оно не число, возвращает true.
            personalMovieDB.count = +prompt("Сколько фильмов вы смотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (var i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''), 
                b = +prompt('На сколько оцените его?', '');
                if (a == "" || b == "" || a.length > 50 || a == null || b == null) {
                    alert('Введены неккоректные данные');
                    i--;
                } else {
                    personalMovieDB.movies[a] = b;
                }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            alert('Ошибка');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
                const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

                if (genre === null || genre == '') {
                    console.log('ВВедены некоректные данные');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }
            }

            personalMovieDB.genres.forEach((item, i) => { // => обозначение функции, эквивалентно "personalMovieDB.genres.forEach(function(item, i) {...}"
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            })
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);


/* -----------------------------------------------------------------------------------------------------------------------------------------------
12 урок: Работа к консоли разработчика */

/* 1 пример */

function hello(){
    console.log('Hello world');
}

hello();

function hi() {
    console.log('Say hi');
}

hi();

const arr = [1, 14, 4, 30, 54],
    sorted  = arr.sort(compareNum);

function compareNum(a, b) {
    return a -  b;
}

console.log(sorted);


/* -----------------------------------------------------------------------------------------------------------------------------------------------
13 урок: Динамическая типизация в JS. */

/* 1 пример. Изменение типа данных у строк и чисел*/

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px'; //Сложение числа и строки на выходе выдаст строку.

console.log(typeof(Number('4'))); //Изменение типа данных из строки в число. (Устаревшая запись)
console.log(typeof(String(5))); //Изменение типа данных из числа в строку. (Устаревшая запись)

console.log(typeof(+'4')); //Изменение типа данных из строки в число при помощи унарного плюса

console.log(typeof(parseInt("15px", 10))); //Изменение типа данных из строки в число.

let answ = +prompt("Hello", "");

/* 2 пример. Изменение типа данных у boolean значений.
0, "", null, underfined, NaN - эти дданные всега имеют значение false. Остальные по умолчанию - true.*/

let switcher = null;

if (switcher) {
    console.log("working..."); //Условие не сработает, так как переменная на данный момент имеет статус null, тоесть false.
}

switcher = 1;

if (switcher) {
    console.log("working..."); //Условие срабатывает, так как в переменную записали число и статус будет true.
}


/* 3 пример */
console.log(typeof(Boolean('5')));

/* 4 пример */
console.log(typeof(!!'5')); //Аналог console.log(typeof(Boolean('5')));


/* -----------------------------------------------------------------------------------------------------------------------------------------------
14 урок: Задачи с собеседований на понимание основ. */

/* Заметки: 
1) Помнить про приоритет операторов
2) И && всега запинается на лжи
3) Или || всегда запинается на правде */



/* Какое будет выведено значение: let x = 5; alert( x++ ); ? Постфиксная форма сначала возвращает значение, потом увеличивает на 1.
Ответ: 5

Чему равно такое выражение: [ ] + false - null + true ? Пустой массиф по факту превращается в пустую строку. При сложении массива и false получим строку "false", после вычитания null уже будет NaN.
Ответ: NaN

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? Передача по значению от y к х.
Ответ: 2

Чему равна сумма [ ] + 1 + 2? Пустой массиф по факту превращается в пустую строку. Числа склеются так как это пустой массив и строки по типу данных
Ответ: 12

Что выведет этот код: alert("12345"[3]);? Тут происходит обращение к символу из строки по индексу.
Ответ: 4

Чему равно 2 && 1 && null && 0 && undefined ? Оператор && (И) всегда останавливает работу на первом false и возвращает значение. В данном примере это null.
Ответ: null
 

Есть ли разница между выражениями? !!( a && b ) и (a && b)? Двойоное отрицание !! превращает следующей выражение в булиновое (boolean).
Ответ: Да, из-за !!. Тут сравнивается булиновое значение с выражением другого типа данных.


Что выведет этот код: alert( null || 2 && 3 && 5 || 4 ); ? Тут важно помнить приоритет выполнения операторов. И выше чем Или по приоритету, когда оба аргумента равны, передаваться будет последнее значение. || (или) всегда останавливается на true и возвращает значение.
Ответ: 5.
 

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? 
Ответ: нет, так как это две разных переменных, с одинаковым содержимым

Что выведет этот код: alert( +"Infinity" ); ? Из-за унарного плюса будет ти данных число. На экран выведется то, что в кавычках.
Ответ: infinity (тип данных число)

Верно ли сравнение: "Ёжик" > "яблоко"? //Тут нужно проверять символы по кодировке unicode. Одна строка будет больше или меньше другой за счёт регистра, кол-ва букв и самих символов. 
Ответ: нет. ёжик будет меньше по кодировке unicode.


Чему равно 0 || "" || 2 || undefined || true || falsе ? Или останавливается на правде.
Ответ: 2.
*/



/* -----------------------------------------------------------------------------------------------------------------------------------------------
15 урок: Получение элементов со страницы. */

/* материал в файле working_with_webpage.js */


/* -----------------------------------------------------------------------------------------------------------------------------------------------
16 урок: Действия с элементами на странице. */

/* материал в файле working_with_webpage.js */


/* -----------------------------------------------------------------------------------------------------------------------------------------------
17 урок: Практика. Задание на отработку действий на странице. */

/* выполненное задание в папке JS_praktice_work_with_webpage */


/* -----------------------------------------------------------------------------------------------------------------------------------------------
18 урок: События и их обработчики */

/* материал в файле preview_script.js и preview.html */

/* -----------------------------------------------------------------------------------------------------------------------------------------------
19 урок: Навигация по DOM - элементам, data-атрибуты, преимущество for/of */

/* маиериал в файле dataAtr.html и dataAtr.js*/

/* -----------------------------------------------------------------------------------------------------------------------------------------------
20 урок: Практика. Используем события на странице проекта */

/* выполненное задание в папке JS_praktice_work_with_webpage */