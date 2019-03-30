import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  myClock;

  @Output('motGiay') motGiayTroiQua = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.myClock = setInterval(() => {
      this.motGiayTroiQua.emit({
        
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.myClock)
  }

}
