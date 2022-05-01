import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.fullnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.canNotStrider]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.verifyFields('password', 'confirmPassword')]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.registerForm.reset({
      name: 'Juan Lavallen',
      email: 'example@example.com',
      username: 'juan_dev_jr02'
    });
  }

  invalidField(field: string) {
    return this.registerForm.get(field)?.invalid &&
      this.registerForm.get(field)?.touched;
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
