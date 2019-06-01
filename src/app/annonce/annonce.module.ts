import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AnnoncePage } from './annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],

  declarations: [AnnoncePage]

})
export class AnnoncePageModule {}
