import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-data-block',
  templateUrl: './data-block.component.html',
  styleUrls: ['./data-block.component.scss']
})
export class DataBlockComponent implements OnInit {

  @Input() rocket;
  photo = 'falcon9.jpg';

  constructor() { }

  ngOnInit() {
  }

}
