import { AbstractControl, ValidatorFn } from '@angular/forms';


export function passwordCheck(): ValidatorFn {
  return <ValidatorFn> function (control: AbstractControl): { [key: string]: boolean } {
    const letterLowReg = /[a-z]/;
    if (!letterLowReg.test(control.value)) {
      return { 'low': true };
    }

    const letterUpReg = /[A-Z]|[\u0080-\u024F]/;
    if (!letterUpReg.test(control.value)) {
      return { 'up': true };
    }

    const numberReg = /[0-9]/;
    if (!numberReg.test(control.value)) {
      return { 'number': true };
    }

    const regSpecial = /[!@#$%^&*?{}]/;
    console.log('+ ', regSpecial.test(control.value));
    if (!regSpecial.test(control.value)) {
      return { 'special': true };
    }
    return null;
  };
}

export function urlCheck(): ValidatorFn {
  return function (control: AbstractControl): { [key: string]: boolean } {
    const exp = '((?:(?:http?|ftp)[s]*:\\/\\/)?[a-z0-9-%\\/\\&=?\\.]+\\.[a-z]{2,4}\\/?([^\\s<>\\#%"\\,\\{\\}\\\\|\\\\\\^\\[\\]`]+)?)';
    const urlReg = new RegExp(exp, 'gi');
    if (!urlReg.test(control.value)) return { 'url': true };
    return null;
  };
}

export function dateCheck(): ValidatorFn {
  return function (control: AbstractControl): { [key: string]: boolean } {
    if (Date.parse(control.value) > Date.now()) return { 'date': true };
    return null;
  };
}
