import { InputMaskModule } from 'primeng/inputmask';
import { Candidato } from './../../core/model';

import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup ,FormBuilder, FormControl, Validators} from '@angular/forms';
import { CandidatoVagaService } from '../candidato-vaga.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-candidato-vaga',
  templateUrl: './candidato-vaga.component.html',
  styleUrls: ['./candidato-vaga.component.css']
})

export class CandidatoVagaComponent implements OnInit {
 // formulario!: FormGroup;
  contactForm!: FormGroup;

  @Input() filteredOptions!: [];
valorSalvo: string = '';
text: string ='';
  valorInicial: any = 15;
  vagaTeste: string = "";
 codigo!: number;
   @Input() mudouValor: string = "";

   @Input() mudouOption : string = "";
   onMudouOption(evento: string){
    this.mudouOption = evento;

   //  console.log(evento);
  //   console.log(this.mudouOption + 'teste');
   }
 onMudouValor(evento: string){
  console.log(evento);
}
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private candidatoVagaService: CandidatoVagaService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params['id']);
    this.codigo = this.route.snapshot.params['id'];
   // this.confirgForm();
    this.contactForm = this.createFormGroup();
  }
  onKeyUpEvent(event: any){

    console.log(event.target.value);

 }
 valuechange(newValue: any) {
  const mymodel = newValue;
  console.log(newValue)
}
  salvarValor(valor: string){
    this.valorSalvo = valor;
  }
  createFormGroup() {
    return new FormGroup({
      vaga: new FormGroup({
        id: new FormControl()
       }),
       candidato: new FormGroup({
        id: new FormControl(this.codigo)
       }),
       vagaSalario:new FormControl("", Validators.required)

    });
  }
 /* confirgForm(){
    this.formulario = this._formBuilder.group({
      nome: [""],
      vaga: this._formBuilder.group({
       teste3: [],
      }),
      candidato: this._formBuilder.group({
        id : [this.codigo],
      })

     });
  }
*/

metodo(evento: Event){
  alert(evento);
}

  cancelar() {
    this.contactForm.reset();
    this.router.navigate(['/candidatos']);
  }
  adicionarCandidatoVaga() {
    this.candidatoVagaService.adicionar(this.contactForm.value)
      .then(candidatoVagaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Candidato  cadastrado com sucesso!' });

        this.router.navigate(['/candidatoVaga']);
      })

      .catch(erro => this.errorHandler.handle(erro));

  }


}
