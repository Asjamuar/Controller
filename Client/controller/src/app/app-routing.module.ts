import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { HomepageComponent } from './homepage/homepage.component';
import { DataComponent } from './data/data.component';

const routes = [
  { path: 'data', component: DataComponent },
  { path: '', redirectTo: '/data', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
