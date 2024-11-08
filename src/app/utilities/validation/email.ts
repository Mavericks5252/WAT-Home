import { AbstractControl, ValidatorFn } from '@angular/forms';


export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(control.value)) {
      return { 'invalidEmail': true };
    }
    return null;
  };
}