import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input('menu') menu: any = {};

  constructor() {}

  ngOnInit(): void {}
}
