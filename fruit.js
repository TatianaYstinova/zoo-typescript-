//==========================================================================================
var apple = {
    title: 'яблоко'
};
var pear = {
    title: "груша"
};
//совпадают ли названия фруктов
function compareFruits(fruitA, fruitB) {
    return fruitA.title === fruitB.title;
}
console.log(compareFruits(apple, pear)); // false - не совпадают
//==========================================================================================
var tomato = { title: 'томат' };
var fruitsInTheBox = [
    { title: 'апельсин' },
    { title: 'манадрин' },
];
//есть ли искомый фрукт во фруктах из коробки
var findFruit = function (fruitToFind, fruitInTheBox) {
    return fruitInTheBox.some(function (_a) {
        var title = _a.title;
        return fruitToFind.title === title;
    });
};
console.log(findFruit(tomato, fruitsInTheBox)); //false - томата нет в коробке с апельсином и мандарином
