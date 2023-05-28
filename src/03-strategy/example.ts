import './set-html.ts';

import { Beer as BeerType, mockData } from './data.ts';

interface Strategy {
  show(data: BeerType[], htmlElement: HTMLElement): void;
}

class InfoContext {
  data: BeerType[];
  htmlElement: HTMLElement;

  #strategy: Strategy;

  constructor(strategy: Strategy, data: BeerType[], htmlElement: HTMLElement) {
    this.#strategy = strategy;
    this.data = data;
    this.htmlElement = htmlElement;
  }

  setStrategy(strategy: Strategy) {
    this.#strategy = strategy;
  }

  show() {
    this.#strategy.show(this.data, this.htmlElement);
  }
}

class ListStrategy implements Strategy {
  show(data: BeerType[], htmlElement: HTMLElement): void {
    htmlElement.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
      <div>
        <h2 class="card-title">${beer.name}</h2>
        <p class="card-subtitle mb-2 text-muted">${beer.country}</p>
      </div>
      <hr>
    `
      );
    }, '');
  }
}

class DetailedListStrategy implements Strategy {
  show(data: BeerType[], htmlElement: HTMLElement): void {
    htmlElement.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">${beer.name}</h2>
          <h4 class="card-subtitle mb-2 text-muted">${beer.country}</h4>
          <p class="card-text">${beer.info}</p>
        </div>
      </div>
    `
      );
    }, '');
  }
}

class ListWithImageStrategy implements Strategy {
  show(data: BeerType[], htmlElement: HTMLElement) {
    htmlElement.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
      <div class="card">
        <img src="${beer.img}" class="card-img-top" alt="${beer.name}">
        <div class="card-body">
          <h2 class="card-title">${beer.name}</h2>
          <h4 class="card-subtitle mb-2 text-muted">${beer.country}</h4>
          <p class="card-text">${beer.info}</p>
        </div>
      </div>
    `
      );
    }, '');
  }
}

const info = new InfoContext(
  new ListStrategy(),
  mockData,
  document.getElementById('listContent')!,
);
info.show();

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImageStrategy(),
];

document.getElementById('selectOptions')!.addEventListener('change', e => {
  const option = (e.target as HTMLSelectElement).value;
  info.setStrategy(strategies[+option]);
  info.show();
});
