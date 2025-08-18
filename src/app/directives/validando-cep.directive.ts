import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CepService } from '../services/cep.service';

@Directive({
  selector: '[validadorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidandoCepDirective,
    multi: true
  }]
})
export class ValidandoCepDirective implements AsyncValidator {

  constructor(private cepService: CepService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.cepService.getConsultaCep(cep).pipe(map(
      (resultado: any) => resultado.erro ? { 'validadorCep': true } : null
    ))
  }

}
