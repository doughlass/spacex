import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { ApiService } from '../api.service';

@Component({
  selector: 'x-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) { }
  @Input() type;
  launches: any = [];
  title: string;

  ngOnInit() {

    this.title = this.type === 'latest' ? 'Latest Launch' : 'Scheduled Launches';
    this.apiService.launches(this.type).subscribe(
      (res) => {
        console.log(res, typeof res);
        console.log(Array.isArray(res));
        if (Array.isArray(res)) {
          this.launches = res;
        } else {
          this.launches.push(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.launches);
  }
}
