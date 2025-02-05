import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  output,
} from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addoreditlist-modal',
  templateUrl: './addoreditlsitmodal.component.html',
  imports: [ModalComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddOrEditListComponent {
  showModal = input.required<boolean>();
  onModalClose = output<void>();
}
