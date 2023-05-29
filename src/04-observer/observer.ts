interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;

  unsubscribe(observer: IObserver<T>): void;

  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
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

class Observer<T> implements IObserver<T> {
  readonly #fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.#fn = fn;
  }

  refresh(value: T): void {
    this.#fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>(value =>
  console.log(`Observer 1: ${value}`),
);
const observer2 = new Observer<number>(value =>
  console.log(`Observer 2: ${value}`),
);

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1.7);

const subjectString = new Subject<string>();
const obs1Str = new Observer<string>(value =>
  console.log(`Observer Upper: ${value.toUpperCase()}`),
);
const obs2Str = new Observer<string>(value =>
  console.log(`Observer Lower: ${value.toLowerCase()}`),
);

subjectString.subscribe(obs1Str);
subjectString.subscribe(obs2Str);
subjectString.notify('Hello World!');
