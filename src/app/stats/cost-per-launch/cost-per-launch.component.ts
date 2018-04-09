import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-cost-per-launch',
  templateUrl: './cost-per-launch.component.html',
  styleUrls: ['./cost-per-launch.component.scss']
})
export class CostPerLaunchComponent implements OnInit {

  constructor() { }
  @Input() value;
  options: {
    useGrouping: true,
    separator: ',',
    decimal: '.',
  };

  ngOnInit() {
  }

}
