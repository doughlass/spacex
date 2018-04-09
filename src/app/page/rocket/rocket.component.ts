import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'x-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit, OnDestroy {
  private sub: any;
  id: string;
  rocket: any;
  mass = {
    kg: {},
    lb: {}
  };
  diameter = {
    feet: {},
    meters: {}
  };
  height = {
    feet: {},
    meters: {}
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.apiService.rockets(this.id).subscribe(
      (res) => {
        console.log(res, typeof res);
        this.rocket = res || res[0];
        this.mass.kg = {
          title: 'mass',
          value: this.rocket.mass.kg,
          unit: 'kg',
        };
        this.mass.lb = {
          title: 'mass',
          value: this.rocket.mass.lb,
          unit: 'lbs',
        };

        this.diameter.feet = {
          title: 'diameter',
          value: this.rocket.diameter.feet,
          unit: 'ft',
        };
        this.diameter.meters = {
          title: 'diameter',
          value: this.rocket.diameter.meters,
          unit: 'mtrs',
        };

        this.height.feet = {
          title: 'diameter',
          value: this.rocket.height.feet,
          unit: 'ft',
        };
        this.height.meters = {
          title: 'diameter',
          value: this.rocket.height.meters,
          unit: 'mtrs',
        };
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
