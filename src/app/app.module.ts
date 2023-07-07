import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotfoundComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
