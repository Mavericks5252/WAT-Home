import { Component, inject, model,ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import {MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatListModule } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';


export interface signInDialogData{
  email: string,
  password: string,
}
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule, MatMenuModule, CommonModule, MatDividerModule, NotificationsComponent, MatListModule, MatDialogModule, SignInDialogComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AccountComponent {
  email= model('');
  password= model('');
  color="accent"
  signInDialog=inject(MatDialog)
  signedIn=false;
  

  ngOnChanges(){
    if (this.email() != ''){
      console.log('help');
    }
  }
  logOut(){
    this.email.set('');
    this.password.set('');
    this.signedIn=false;
  }

  signIn(enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogRef = this.signInDialog.open(SignInDialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: 'custom-dialog-container',
      data: {email: this.email(), password: this.password()}
      });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed');
      if (result !== undefined){
        this.email.set(result.email)
        this.password.set(result.password)
      }
      if (this.email().toString() !== '' && this.password().toString() !== ''){
        this.signedIn=true;
      }
    });
  }

  log(){
    console.log(this.signedIn);
  }
}

