import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Counter } from '../../../shared/interfaces/counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() counter: Counter;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  public onIncrease(): void {
    const newValue = this.counter.value + this.counter.changeBy;

    this.valueChanged.emit(newValue);
  }

  public onDecrease(): void {
    const newValue = this.counter.value - this.counter.changeBy;

    this.valueChanged.emit(newValue);
  }
}
