import { Component, output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  imports: [],
  templateUrl: './success-modal.html',
})
export class SuccessModal {
  onClose = output();

  handleClose() {
    this.onClose.emit();
  }
}
