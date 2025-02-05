import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'tskr-dashboard-layout',
  imports: [
    // RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    // ToasterComponent,
    CommonModule,
    LoadingComponent,
  ],
  templateUrl: './dashboardLayout.component.html',
})
export class DashboardLayout {
  loading = true;
}
