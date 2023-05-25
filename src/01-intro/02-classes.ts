// Class syntax
class Drink {
  readonly #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getInfo() {
    return `This drink is called ${this.#name}`;
  }
}

const drink = new Drink('Coke');
console.log(drink.getInfo());


// Functional syntax
function DrinkFn(name: string) {
  // @ts-ignore
  this.name = name;
  // @ts-ignore
  this.getInfo = () => `This drink is called ${name}`;
}

// @ts-ignore
const drinkFn = new DrinkFn('Water');
console.log(drinkFn.getInfo());


// Interface
interface Product {
  price: number;

  getPrice(): string;
}


// Inheritance
class Beer extends Drink implements Product {
  price: number;
  readonly #alcohol: number;

  constructor(name: string, alcohol: number, price: number = 2.5) {
    super(name);
    this.#alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return `This beer costs $${this.price}`
  }

  getInfo() {
    return `${super.getInfo()} and has ${this.#alcohol}% alcohol`;
  }
}

class Snack implements Product {
  price: number;
  #name: string;

  constructor(name: string, price: number) {
    this.#name = name;
    this.price = price;
  }

  getPrice(): string {
    return `The snack ${this.#name} costs $${this.price}`
  }

}

const beer = new Beer('Heineken', 5.7);
console.log(beer.getInfo());

const products: Product[] = [
  new Beer('Heineken', 5.7),
  new Snack('Peanuts', 1.5),
  new Snack('Chips', 2.5)
]

function getPrices(products: Product[]): string[] {
  return products.map(product => product.getPrice());
}

console.log(getPrices(products));