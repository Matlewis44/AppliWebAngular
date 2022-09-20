import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymaent-card',
  templateUrl: './paymaent-card.component.html',
  styleUrls: ['./paymaent-card.component.css']
})
export class PaymaentCardComponent implements OnInit {
  @Input() fullwidth: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
