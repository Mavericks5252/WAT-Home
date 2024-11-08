import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {Router, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [MatSidenavModule, MatGridListModule, MatButtonModule, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(private router:Router) { } 
  createAccount(){

    //create Account
    this.router.navigate(['']);
  }
}
