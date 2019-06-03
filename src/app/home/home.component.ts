import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actionMode = false;
  sideBar = false;
  constructor() { }

  ngOnInit() {
  }
  toggleMode(registerMode: boolean) {
    this.actionMode = registerMode;
  }

}
