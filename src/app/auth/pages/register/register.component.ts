import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailService]],
    username: ['', [Validators.required, this.validatorService.canNotStrider]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.verifyFields('password', 'confirmPassword')]
  });

  get messageErrorEmail(): string {
    const errors = this.registerForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El email no es valido'
    } else if (errors?.['existsEmail']) {
      return 'El email ya existe'
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailService: EmailValidatorService
  ) {}

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
