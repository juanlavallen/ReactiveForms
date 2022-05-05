import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styles: [
  ]
})
export class SelectorsComponent implements OnInit {

  selectForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
