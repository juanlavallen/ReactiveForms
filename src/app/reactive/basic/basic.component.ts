import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl('RTX 4080ti'),
    price: new FormControl(2500),
    stock: new FormControl(12)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
