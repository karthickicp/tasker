import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'tskr-dashboard-layout',
  imports: [RouterOutlet, HeaderComponent, NavbarComponent],
  templateUrl: './dashboardLayout.component.html',
})
export class DashboardLayout {}
