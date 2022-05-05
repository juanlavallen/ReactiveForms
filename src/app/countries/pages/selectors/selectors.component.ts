import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountrySmall } from '../../interfaces/country.interface';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styles: [
  ]
})
export class SelectorsComponent implements OnInit {

  regions: string[] = [];
  countries: CountrySmall[] = [];
  borders: string[] = [];
  loading: boolean = false;

  selectForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
