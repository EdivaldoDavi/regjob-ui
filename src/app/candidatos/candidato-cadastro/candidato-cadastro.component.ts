import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from '../candidato.service';
import { Candidato } from '../../core/model';
import { Observable } from 'rxjs';
import { FileuploadComponent } from 'src/app/shared/fileupload/fileupload.component';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
/**
 * @title Stepper with editable steps
 */
  interface Perfil {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-candidato-cadastro',
  templateUrl: 'candidato-cadastro.component.html',
  styleUrls: ['candidato-cadastro.component.css'],
})
export class CandidatoCadastroComponent implements OnInit {
  candidato: Candidato = new Candidato();
  formulario1!: FormGroup;
  formulario2!: FormGroup;
  formulario3!: FormGroup;
  formulario4!: FormGroup;



  isLinear = false;
  selectedValue!: string;
   perfis : Perfil[] = [
    {value: '0',viewValue: 'PLENO'},
    {value: '1',viewValue: 'JUNIOR' },
    {value: '2',viewValue: 'SENIOR'},
  ];
  private baseUrl = 'http://localhost:8080';
  constructor(
    private _formBuilder: FormBuilder,
    private candidatoService: CandidatoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private http: HttpClient,
    private router: Router
    ) {}


  ngOnInit() {
   this.configForm();
  }
  novo() {
    this.formulario1.reset();

    setTimeout(() => {
      this.candidato = new Candidato();
    }, 1);

    this.router.navigate(['/Candidatos']);
  }

  configForm(){

    this.formulario1 = this._formBuilder.group({
      nome: ['', Validators.required],
     perfil: ["", Validators.required],
     salario:["",Validators.required],
     anexo: []

    });


  }



  get editando(){
    return Boolean(this.formulario1.get('codigo'))
  }

  salvar() {
    if (this.editando) {
      this.atualizarCandidato()
    } else {
      this.adicionarCandidato()
    }
  }
  atualizarCandidato() {
  }

  adicionarCandidato() {
    this.candidatoService.adicionar(this.formulario1.value)
      .then(candidatoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Candidato cadastrado com sucesso!' });

        this.router.navigate(['/candidatos']);
      })

      .catch(erro => this.errorHandler.handle(erro));

  }


}

