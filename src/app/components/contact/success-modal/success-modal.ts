import { Component, output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  imports: [],
  templateUrl: './success-modal.html',
})
export class SuccessModal {
  onClose = output();

  handleClose() {
    console.log('done');
    this.onClose.emit();
  }
}
