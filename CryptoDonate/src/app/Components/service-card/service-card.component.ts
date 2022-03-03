import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() icon: string = "";
  @Input() color: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
