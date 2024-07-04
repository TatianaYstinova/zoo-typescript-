interface Fruit {
    title: string;
}

//==========================================================================================

const apple: Fruit = {
    title: 'яблоко'
}
const pear: Fruit = {
    title: "груша"
}

//совпадают ли названия фруктов
function compareFruits(fruitA: Fruit, fruitB: Fruit,): boolean {
    return fruitA.title === fruitB.title;
}

console.log(compareFruits(apple, pear)); // false - не совпадают

//==========================================================================================

const tomato: Fruit = { title: 'томат' }

const fruitsInTheBox: Fruit[] = [
    { title: 'апельсин' },
    { title: 'манадрин' },
]

//есть ли искомый фрукт во фруктах из коробки
const findFruit = (fruitToFind: Fruit, fruitInTheBox: Fruit[]) => {
    return fruitInTheBox.some(({ title }) => fruitToFind.title === title);
}

console.log(findFruit(tomato, fruitsInTheBox)); //false - томата нет в коробке с апельсином и мандарином