import './set-html.ts';

interface IHtmlObserver {
  element: HTMLElement;
}

interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubjectBase<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;

  unsubscribe(observer: IObserver<T>): void;

  notify(value: T): void;
}

class Subject<T> implements ISubjectBase<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(value: T): void {
    this.observers.forEach(o => o.refresh(value));
  }
}

class ItemsSubject<T> extends Subject<T[]> {
  readonly #data: T[];

  constructor() {
    super();
    this.#data = [];
  }

  add(item: T): void {
    this.#data.push(item);
    this.notify(this.#data);
  }
}

class HtmlObserver implements IHtmlObserver {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  refresh(data: string[]): void {
    this.element.innerHTML = data.reduce(
      (acc: string, el: string) => acc + `<li>${el}</li>`,
      '',
    );
  }
}

class Observer<T> implements IObserver<T> {
  readonly #fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.#fn = fn;
  }

  refresh(value: T): void {
    this.#fn(value);
  }
}

const items = new ItemsSubject<string>();
const div1Obs = new HtmlObserver(
  document.getElementById('div1') as HTMLElement,
);
const div2Obs = new HtmlObserver(
  document.getElementById('div2') as HTMLElement,
);
const obs1 = new Observer((data: string[]) => {
  document.getElementById('div3')!.innerHTML = String(data.length);
});

items.subscribe(div1Obs);
items.subscribe(div2Obs);
items.subscribe(obs1);

document.querySelector('button')!.addEventListener('click', () => {
  items.add((document.getElementById('inputName') as HTMLInputElement).value);
});
