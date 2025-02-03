import { Component, OnInit } from '@angular/core';
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
export class DashboardLayout implements OnInit {
  loading = true;

  ngOnInit() {
    console.log(this.loading, 'loading');
    setTimeout(() => {
      this.loading = false;
    }, 5000);
    console.log(this.loading, 'loading 2');
  }
}
