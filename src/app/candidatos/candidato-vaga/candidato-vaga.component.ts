import { Component, OnInit, Input } from '@angular/core';
import { FormGroup ,FormBuilder} from '@angular/forms';
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
  formulario!: FormGroup;

  valorInicial: any = 15;
  vagaTeste: string = "";
 codigo!: number;
   @Input() mudouValor: string = "";
 onMudouValor(evento: Event){
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
    this.confirgForm();
  }
  confirgForm(){
    this.formulario = this._formBuilder.group({
      vaga: this._formBuilder.group({
        id : [this.vagaTeste],
      }),
      candidato: this._formBuilder.group({
        id : [this.codigo],
      })

     });
  }
  novo() {
    this.formulario.reset();



    this.router.navigate(['/Candidatos']);
  }
  adicionarCandidatoVaga() {
    this.candidatoVagaService.adicionar(this.formulario.value)
      .then(candidatoVagaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Candidato  cadastrado com sucesso!' });

        this.router.navigate(['/Candidatos']);
      })

      .catch(erro => this.errorHandler.handle(erro));

  }

}
