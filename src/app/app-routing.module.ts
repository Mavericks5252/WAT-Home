import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



const routes: Routes = [
  { path: 'createaccount', component: CreateAccountComponent },
  { path: 'home', component: ToolbarComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
