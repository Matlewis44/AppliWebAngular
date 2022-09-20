import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from '../models/item';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {
  nav_items: Item[] = nav_items
  auth_data: Item[] = auth_items

  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  handleClose(){
    this.close.emit()
  }

}
