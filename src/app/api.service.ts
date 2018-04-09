import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  launches(type) {
    const url = `https://api.spacexdata.com/v2/launches/${type}`;
    return this.http.get(url);
  }

  info() {
    const url = `https://api.spacexdata.com/v2/info`;
    return this.http.get(url);
  }

  rockets(type = '') {
    const url = `https://api.spacexdata.com/v2/rockets/${type}`;
    return this.http.get(url);
  }

  capsules(type) {
    const url = `https://api.spacexdata.com/v2/capsules/${type}`;
    return this.http.get(url);
  }
}
