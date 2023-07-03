import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuList: any[] = [
    { id: 1, label: 'Home', items: [], icon: '' },
    { id: 1, label: 'Features', items: [], icon: '' },
    { id: 1, label: 'Management', items: [], icon: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
