import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SummaryPipe } from 'src/app/pipes/summary.pipe';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MenuItemComponent } from 'src/app/components/menu-item/menu-item.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AppModule } from 'src/app/app.module';
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
