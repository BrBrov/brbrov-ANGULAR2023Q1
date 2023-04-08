import {AbstractControl, ValidatorFn} from '@angular/forms';

export function passwordCheck(): ValidatorFn {
  return <ValidatorFn>function (control: AbstractControl): {[key: string]: boolean} {
    const letterLowReg: RegExp = /[a-z]/;
    if (!letterLowReg.test(control.value)) {
      return {'low': true};
    }

    const letterUpReg: RegExp = /[A-Z]|[\u0080-\u024F]/;
    if (!letterUpReg.test(control.value)) {
      return {'up': true};
    }

    const numberReg: RegExp = /[0-9]/;
    if (!numberReg.test(control.value)) {
      return {'number': true};
    }

    const regSpecial: RegExp = /[!@#$%^&*?{}]/;
    console.log('+ ', regSpecial.test(control.value));
    if (!regSpecial.test(control.value)) {
      return {'special': true};
    }
    return null;
  }
}
