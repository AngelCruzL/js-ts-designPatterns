type Language = 'es' | 'en';

class WeekDays {
  static #instance: WeekDays;
  readonly #lang: Language;

  #daysEs: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ]

  #daysEn: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  private constructor(lang: Language) {
    this.#lang = lang;
  }

  public static getInstance(lang: Language): WeekDays {
    if (!this.#instance) {
      this.#instance = new WeekDays(lang);
    }

    return this.#instance;
  }

  public getDays(): string[] {
    return this.#lang === 'es' ? this.#daysEs : this.#daysEn;
  }
}

const weekDays1 = WeekDays.getInstance('es');
console.log(weekDays1.getDays());

const weekDays2 = WeekDays.getInstance('en');
console.log(weekDays2.getDays());