import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuList: any[] = [
    { id: 1, label: 'Home', items: [], icon: '', root: true },
    {
      id: 2,
      label: 'Products',
      items: [
        { id: 1, label: 'Home Decor', items: [], icon: '' },
        {
          id: 2,
          label: 'Kitchen',
          items: [
            { id: 1, label: 'Knives', items: [], icon: '' },
            { id: 2, label: 'Utensils', items: [], icon: '' },
          ],
          icon: '',
        },
        { id: 3, label: 'Gadgets', items: [], icon: '' },
      ],
      icon: '',
      root: true,
    },
    { id: 3, label: 'Management', items: [], icon: '', root: true },
  ];

  sideMenuVisibility: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  toggleSideMenu() {
    this.sideMenuVisibility = !this.sideMenuVisibility;
  }

  onLogout() {
    this.authService.logout();
  }
}
