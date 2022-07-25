// 1.	Новогодний подарок. 
// Определить иерархию конфет и прочих сладостей. 
// Создать несколько объектов-конфет. 
// Собрать детский подарок с определением его веса. 
// Провести сортировку конфет в подарке на основе одного из параметров. 
// Найти конфету в подарке, соответствующую заданному диапазону параметров.

class СhildrensNewYearsPresent {
    constructor() {
        this.sweets = [];
    }

    addProduct(product) {
        this.sweets.push(product);
    }

    getCommonWeight() {
        return this.sweets.map(product => product.weight)
            .reduce((a, b) => a + b);
    }

    getCommonPrice() {
        return this.sweets.map(product => product.price)
            .reduce((a, b) => a + b);
    }

    sortByWeight() {
        return this.sweets.sort((a, b) => a.weight - b.weight)
    }

    filterByPrice(minPrice, maxPrise) {
        return this.sweets.filter(product => {
            if (product.price >= minPrice && product.price <= maxPrise) {
                return product;
            }
        })
    }
}

class Product {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    init() {
        return new Product(this.name, this.weight, this.price)
    }
}

class Candy extends Product {
    constructor(name, weight, price, sugar) {
        super(name, weight, price);
        this.sugar = sugar;
    }
}

class Cookie extends Product {
    constructor(name, weight, price, filling) {
        super(name, weight, price);
        this.filling = filling;
    }
}

class Drink extends Product {
    constructor(name, weight, price, taste) {
        super(name, weight, price);
        this.taste = taste;
    }
}

const presentForFirstChild = new СhildrensNewYearsPresent();
presentForFirstChild.addProduct(new Candy('Chocolate candies', 600, 15, 'for diabetics'));
presentForFirstChild.addProduct(new Candy('Jellybeans', 200, 10, 'for diabetics'));
presentForFirstChild.addProduct(new Cookie('Cracker', 100, 3, 'cheese'));
presentForFirstChild.addProduct(new Drink('Juice', 300, 2, 'orange'));

const presentForSecondChild = new СhildrensNewYearsPresent();
presentForSecondChild.addProduct(new Candy('Chocolate candies', 400, 10, 'with sugar'));
presentForSecondChild.addProduct(new Candy('Jellybeans', 150, 8, 'with sugar'));
presentForSecondChild.addProduct(new Candy('Grillage', 50, 4, 'with sugar'));
presentForSecondChild.addProduct(new Cookie('Sandwich', 60, 4, 'walnut'));
presentForSecondChild.addProduct(new Drink('Pepsi', 250, 5, 'vanilla'));

console.log(`First New Year present weight ${presentForFirstChild.getCommonWeight()} grams and has a price ${presentForFirstChild.getCommonPrice()} $`);
console.log(presentForFirstChild.sortByWeight());
console.log(presentForFirstChild.filterByPrice(3, 10));

console.log(`Second New Year present weight ${presentForSecondChild.getCommonWeight()} grams and has a price ${presentForSecondChild.getCommonPrice()} $`);
console.log(presentForSecondChild.sortByWeight());
console.log(presentForSecondChild.filterByPrice(4, 5));