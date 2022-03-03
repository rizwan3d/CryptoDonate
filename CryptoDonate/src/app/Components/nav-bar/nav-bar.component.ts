import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  opened : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() : void {
    this.opened = !this.opened;
  }

}
