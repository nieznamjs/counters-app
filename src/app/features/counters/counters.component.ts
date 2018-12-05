import { Component, OnInit } from '@angular/core';

import { Counter } from '../../shared/interfaces/counter.interface';
import { NumbersService } from '../../core/services/numbers.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  public counters: Counter[];

  constructor(private numbersService: NumbersService) { }

  ngOnInit() {
    this.counters = this.numbersService.getArrayOfCounters(10);
  }

  public changeValue(newValue: number, index: number) {
    this.counters[index].value = newValue;
  }
}
