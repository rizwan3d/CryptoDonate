import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-card',
  templateUrl: './transactions-card.component.html',
  styleUrls: ['./transactions-card.component.scss']
})
export class TransactionsCardComponent implements OnInit {

  @Input() addressFrom: string = "";
  @Input() addressTo: string = "";
  @Input() amount: string = "";
  @Input() message: string = "";
  @Input() gifUrl: string | null = null ;
  @Input() timestamp: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  shortenAddress(address :string) : string {
    return address;
  }

}
