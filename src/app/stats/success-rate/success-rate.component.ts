import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-success-rate',
  templateUrl: './success-rate.component.html',
  styleUrls: ['./success-rate.component.scss']
})
export class SuccessRateComponent implements OnInit {

  constructor() { }
  @Input() value;

  ngOnInit() {
  }

}
