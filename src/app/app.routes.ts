import { Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const routes: Routes = [
    { path: 'create-account', component: CreateAccountComponent },
    { path: '', component: ToolbarComponent}
];
