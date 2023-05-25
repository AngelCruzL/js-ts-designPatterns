class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStategy(strategy) {
    this.strategy = strategy;
  }

  getSalePrice(price) {
    return this.strategy.getSalePrice(price);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  getSalePrice(price) {
    return price + (price * this.tax);
  }
}

const regularSaleStrategy = new RegularSaleStrategy(0.16);
const saleContext = new SaleContext(regularSaleStrategy);
console.log(saleContext.getSalePrice(100)); // 116

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  getSalePrice(amount) {
    return amount + (amount * this.tax) - this.discount;
  }
}

const discountSaleStrategy = new DiscountSaleStrategy(0.16, 10);
saleContext.setStategy(discountSaleStrategy);
console.log(saleContext.getSalePrice(100)); // 106

class ForeignSaleStrategy {
  getSalePrice(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }
}

const foreignSaleStrategy = new ForeignSaleStrategy();
saleContext.setStategy(foreignSaleStrategy);
console.log(saleContext.getSalePrice(100)); // 2000
