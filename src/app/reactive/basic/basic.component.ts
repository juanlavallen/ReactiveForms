import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4080ti'),
  //   price: new FormControl(2500),
  //   stock: new FormControl(12)
  // });

  myForm: FormGroup = this.fb.group({
    name:  [, [Validators.required, Validators.min(3)]  ],
    price: [, [Validators.required, Validators.min(50)] ],
    stock: [, [Validators.required, Validators.min(0)]  ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 2500,
      stock: 12
    });
  }

  invalidField(field: string) {
    return this.myForm.controls[field].invalid &&
      this.myForm.controls[field].touched;
  }

}
