import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: true
    });

    // this.myForm.get('terms')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    this.myForm.valueChanges.subscribe(({ terms, ...rest }) => {
      // delete form.terms;
      this.person = rest;
    });

  }

  save() {
    const formValue = { ... this.myForm.value };
    delete formValue.terms;
    this.person = formValue;
  }
}
