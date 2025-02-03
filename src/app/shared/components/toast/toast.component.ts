import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class ToasterComponent {
  message = input('');
  status = input('');
}
