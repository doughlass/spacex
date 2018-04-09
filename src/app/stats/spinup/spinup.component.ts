import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-spinup',
  templateUrl: './spinup.component.html',
  styleUrls: ['./spinup.component.scss']
})
export class SpinupComponent {

  constructor() { }
  @Input() data;
  options: {
    decimals: 2,
    useGrouping: false,
    separator: ',',
    decimal: '.',
  };
}
