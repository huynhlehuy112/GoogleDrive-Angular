import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPageComponent } from './signin-page.component';

const routes: Routes = [{ path: '', component: SigninPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninPageRoutingModule { }