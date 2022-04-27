import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['GTA V', Validators.required],
      ['Counter Strike 1.6', Validators.required]
    ], Validators.required)
  });

  newGameFavorite: FormControl = this.fb.control('', Validators.required)

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  invalidField(field: string) {
    return this.myForm.controls[field].invalid &&
      this.myForm.controls[field].touched;
  }

  addFavorite() {
    if (this.newGameFavorite.invalid) { return };

    // this.favoritesArr.push(new FormControl(
    //   this.newGameFavorite.value, Validators.required
    // ));

    this.favoritesArr.push(this.fb.control(
      this.newGameFavorite.value, Validators.required
    ));

    this.newGameFavorite.reset();
  }

  deleteFormControl(i: number) {
    this.favoritesArr.removeAt(i);
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
    console.log(this.myForm.value);
  }
}