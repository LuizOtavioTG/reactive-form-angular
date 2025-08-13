import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorDeIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorDeIdadeDirective,
    multi: true
  }]
})
export class MaiorDeIdadeDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();

    return idade >= 18 ? null : { menorDeIdade: true };
  }
  
  constructor() { }

}
