import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SummaryPipe } from './../../pipes/summary.pipe';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { MenuItemComponent } from './../../components/menu-item/menu-item.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MenuItemComponent,
    FooterComponent,
    SummaryPipe,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
})
export class HomeModule {}
