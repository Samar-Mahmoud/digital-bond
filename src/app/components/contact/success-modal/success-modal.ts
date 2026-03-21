import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-modal',
  imports: [],
  templateUrl: './success-modal.html',
})
export class SuccessModal {
  private router = inject(Router);

  handleClose() {
    this.router.navigateByUrl('/');
  }
}
