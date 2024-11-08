import { Component, inject,model,Inject,signal } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface signInDialogData{
  email: string,
  password: string,
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatFormFieldModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule,FormsModule,CommonModule, MatProgressSpinnerModule, MatIconModule, RouterLink],
  templateUrl: './sign-in-dialog.component.html',
  styleUrl: './sign-in-dialog.component.css'
})
export class SignInDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {email:string, password:string}){
    
  }
  readonly dialogRef = inject(MatDialogRef<SignInDialogComponent>);
  readonly data1 = inject<signInDialogData>(MAT_DIALOG_DATA);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordReset= false;
  matcher = new MyErrorStateMatcher();
  email='';
  password='';
  email1=model(this.data1.email);
  value=0
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  resetPassword(){
    this.passwordReset = true;
    this.value=1;
  }
  createAccount(){

  }

  sendResetLink(){
    //Send Email
    this.value=2;
    setTimeout(() => {  this.value=3; }, 2000);

  }

  login(){
    let result ={
      email: this.email,
      password: this.password
    }
    this.dialogRef.close(result);
  }
}
