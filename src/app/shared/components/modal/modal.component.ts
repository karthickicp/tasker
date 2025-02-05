import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [CommonModule],
})
export class ModalComponent implements OnInit {
  show = input.required<boolean>();
  onModalClose = output<void>();
  ngOnInit(): void {
    console.log(this.show, 'this modal show');
  }
}
