import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessModal } from '../success-modal/success-modal';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, SuccessModal],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  formData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl('', [Validators.required, Validators.minLength(2)]),
    project: new FormControl(''),
  });

  private router = inject(Router);

  showModal = signal(false);

  handleSubmit() {
    if (this.formData.invalid) return;

    this.formData.reset();
    this.showModal.set(true);
    this.router.navigateByUrl('/done');
  }

  handleClose() {
    this.showModal.set(false);
    this.router.navigateByUrl('/');
  }
}
