import { Component } from '@angular/core';

@Component({
  selector: 'tskr-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  count = 0;
  incrementCounter(): void {
    this.count++;
  }
  decrementCounter(): void {
    this.count--;
  }
}
