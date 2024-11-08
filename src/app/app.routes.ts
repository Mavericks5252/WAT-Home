import { Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const routes: Routes = [
    { path: 'createaccount', component: CreateAccountComponent },
    { path: 'home', component: ToolbarComponent},
    { path:'', redirectTo: 'home', pathMatch:'full'}
];
