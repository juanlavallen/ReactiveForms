import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    name: ['RTX 4080ti'],
    price: [2500],
    stock: [12]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
