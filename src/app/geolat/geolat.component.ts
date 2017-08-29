import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolat',
  templateUrl: './geolat.component.html',
  styleUrls: ['./geolat.component.css']
})
export class GeolatComponent implements OnInit {
  position: any = null;

  constructor() { }

  async ngOnInit() {
    this.position = await this.getCurrentPosition();
    console.log("this position:", this.position);
  }
  async getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!window.navigator.geolocation) {
        console.log('Geolocation not supported.');
        reject("error:Geolocation not supported.");
      } else {
        window.navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve(position);
            console.log(position);
          },
          function (err) {
            console.log(err);
            reject(err);
          });
      }
    });



  }
}
