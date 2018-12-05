import { Injectable } from '@angular/core';

import { Counter } from '../../shared/interfaces/counter.interface';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  public generateRandomNumber(): number {
    return Math.floor(Math.random() * 100 + 1);
  }

  public getArrayOfCounters(numberOfCounters: number): Counter[] {
    const countersArray: Counter[] = [];

    for (let i = 0; i < numberOfCounters; i++) {
      countersArray.push({
        value: this.generateRandomNumber(),
        changeBy: this.generateRandomNumber(),
      });
    }

    return countersArray;
  }
}
