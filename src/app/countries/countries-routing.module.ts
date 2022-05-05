import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectorsComponent } from './pages/selectors/selectors.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selectors', component: SelectorsComponent },
      { path: '**',        redirectTo: 'selectors' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
