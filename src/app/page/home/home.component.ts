import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'x-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rockets: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.rockets().subscribe(
      (res) => {
        console.log(res, typeof res);
        this.rockets = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
