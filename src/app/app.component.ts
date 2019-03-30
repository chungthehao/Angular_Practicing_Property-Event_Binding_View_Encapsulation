import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  soGiay: number = 0;

  daMotGiayRoi(data: {}) {
    this.soGiay++

    console.log(this.soGiay)
  }

}
