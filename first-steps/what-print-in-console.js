//Отличие примитивного типа от ссылочного
const obj1 = {
    x: 5
}
const obj2 = obj1;

obj2.x = 8;

console.log(obj1.x) // тут будет 8, так как мы переменной obj2 ссылаемся на переменную obj1, затем обратились к ключу X и заменили его значение

let a = 5;
let b = a;

b = 9;

console.log(a); // тут 5 так как мы переменную 'a' не меняли
console.log(b); // Тут 9 так как последним присвоением было именно это число

//Приведение типов примитивов
console.log(true + false) //тут будет 1, так как true всегда ровна 1, а false 0
console.log(12 / "6") // тут 2
console.log(12 < "6") // тут false, ведь 12 больше чем 6
console.log("number" + 15 + 3) // Выведется строка "number153", ведь первый операнд является строкой, а значит все что за ним тоже преобразуется в строку
console.log(15 + 3 + "number") // Вот тут уже будет "18number" ведь сначало происходит сложение двух чисел, а уже потом слияние со строкой
console.log("foo" + +"bar") // fooNaN Так как строка "bar" не является числом, а мы хотим ее в него преобразовать
console.log('true' == true) // false так как первая "true" - это строка, а вторая true это уже булево значение значит они не равны
console.log(!!"false" == !!"true") // true
console.log(false == 'false') // false
console.log(null == '') // false
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true на самом деле я даже не знаю как это объяснить
console.log(null == undefined) // true (они равны и оба обозначают ничего)
console.log(null === undefined) //false (но при строгом равенстве они не идентичны)
// По поводу null надо разбераться ведь он не равен ничему кроме себя

//Приведение типов с объектами
console.log([1] > null) //true
console.log([1, 2] > null) //false
console.log(['x'] == 'x') //true так как равенство не строгое
console.log([] + null + 1) //null1
console.log([1, 2, 3] == [1, 2, 3]) // false (они ссылаются на разные объекты)
// true только в случает если:
// let a = [1, 2, 3]
// let b = a
// let c = a
// console.log(b == c) (тут уже true так как объект один)
console.log([1, 2, 3] === [1, 2, 3]) // false принцип тот же
console.log({ a: 1 } - 1) // NaN так как мы хотым вычесть не из число
console.log({ a: 1 } + 2) // [object object]2 это из-за бинарного (если не ошибаюсь) плюса произошла конкатенация