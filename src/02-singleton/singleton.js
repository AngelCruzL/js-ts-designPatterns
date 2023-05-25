class Singleton {
  constructor() {
    this.random = Math.random();

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

let singleton = new Singleton();
let singleton2 = new Singleton();

console.log('Desde singleton: ' + singleton.random);
console.log('Desde singleton2: ' + singleton2.random);
console.log(singleton === singleton2);