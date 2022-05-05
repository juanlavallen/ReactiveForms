import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { CountrySmall } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

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

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    // Cuando cambie la REGION
    this.selectForm.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.selectForm.get('country')?.reset();
          this.loading = true;
        }),
        switchMap(region => this.countriesService.getCountryByRegion(region))
      )
      .subscribe(countries => {
        this.countries = countries;
        this.loading = false;
      });

    // Cuando cambie el PAIS
    this.selectForm.get('country')?.valueChanges
      .pipe(
        tap(() => {
          this.selectForm.get('borders')?.reset('');
          this.loading = true;
        }),
        switchMap(code => this.countriesService.getCountryByAlphaCode(code))
      )
      .subscribe(country => {
        this.borders = country?.borders || [];
        this.loading = false;
      });
  }

  saveForm() {
    console.log(this.selectForm.value);
  }
}