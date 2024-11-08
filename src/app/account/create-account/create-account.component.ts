import { Component, signal } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {Router, RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { emailValidator } from '../../utilities/validation/email';
import { passwordValidator } from '../../utilities/validation/password';
import { __addDisposableResource } from 'tslib';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [MatSidenavModule, MatGridListModule, MatButtonModule, RouterLink, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  myForm: FormGroup;

  //handles the error message outputs that the user sees
  errorMessageEmail = signal('');
  errorMessagePassword = signal('');
  errorMessageFirstName = signal('');
  errorMessageLastName = signal('');

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }



  //inializes the form
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      displayName:[''],
      email: ['', [Validators.required, emailValidator()]],
      password:['', [Validators.required, passwordValidator()]]

    });
  }

  //method to update the error messages for all variables in the form.
  updateErrorMessage(){
    //email errors
    if (this.myForm.controls['email'].hasError('required')) {
      this.errorMessageEmail.set('You must enter a value');
    } else if (this.myForm.controls['email'].hasError('invalidEmail')) {
      this.errorMessageEmail.set('Not a valid email');
    } else {
      this.errorMessageEmail.set('');
    }
    //password errors
    if (this.myForm.controls['password'].hasError('required')) {
      this.errorMessagePassword.set('You must enter a value');
    } else if (this.myForm.controls['password'].hasError('invalidPassword')) {
      this.errorMessagePassword.set('Not a valid Password');
    } else {
      this.errorMessagePassword.set('');
    }

    //firstName errors
    if(this.myForm.controls['firstName'].hasError('required')){
      this.errorMessageFirstName.set('Enter a First Name');
    }else{
      this.errorMessageFirstName.set('');
    }

    //lastName errors
    if(this.myForm.controls['lastName'].hasError('required')){
      this.errorMessageLastName.set('Enter a Last Name');
    }else{
      this.errorMessageLastName.set('');
    }
  }

  //constructor(private router:Router) { } 
  createAccount(){
    if (this.myForm.value['displayName'] == ''){
      this.myForm.value['displayName'] = this.myForm.value['firstName'].toString().charAt(0).toLowerCase() + this.myForm.value['lastName'].toString().toLowerCase();
    }
    //create Account
    console.log(this.myForm.value)
    //this.router.navigate(['']);
  }
}
