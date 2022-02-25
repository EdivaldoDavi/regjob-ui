import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import {startWith, map} from 'rxjs/operators';
import { CandidatoService } from '../candidato.service';
import { Candidato, CandidatoVaga, Vaga } from '../../core/model';
import { Observable } from 'rxjs';

import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { FileUploadService } from 'src/app/services/file-upload.services';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';
import { CandidatoVagaService } from '../candidato-vaga.service';


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
   @Input() candidato: Candidato = new Candidato();

  vaga: Vaga = new Vaga();
  formulario1!: FormGroup;
  formulario2!: FormGroup;
  formulario3!: FormGroup;
  formulario4!: FormGroup;
   formGroup! : FormGroup;
 myGroup!: FormGroup;
  currentFile?: File;
  progress = 0;
  message = '';
  arquivoselecionado!:  File
  selectedFile = null;
  fileName = 'clique aqui ';
  fileInfos?: Observable<any>;

  isLinear = false;
  selectedValue!: File;


   perfis : Perfil[] = [
    {value: '0',viewValue: 'PLENO'},
    {value: '1',viewValue: 'JUNIOR' },
    {value: '2',viewValue: 'SENIOR'},
  ];
  private baseUrl = 'http://localhost:8080';
  private baseUrlAnexo = 'http://localhost:8080/kaspper/candidato/anexo';

  constructor(
    private _formBuilder: FormBuilder,
    private candidatoService: CandidatoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private http: HttpClient,
    private vagaService: VagaService,
    private candidatoVagaService: CandidatoVagaService,
    private uploadService: FileUploadService,
    private router: Router
    ) {}


  ngOnInit() {
   this.configForm();

    }

  cadastrarVaga() {

       this.router.navigate(['/CandidatoVaga/id']);
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
     anexo: [""],

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
        console.log(candidatoAdicionado);
        this.router.navigate(['/candidatoVaga/'+candidatoAdicionado.id]);
      })

      .catch(erro => this.errorHandler.handle(erro));

  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
      console.log(event);
    } else {

      this.fileName = '';
    }
  }
  upload(): void {
    this.progress = 0;
    this.message = "";
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe(


        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
            this.fileName = event.body;

          } else if (event instanceof HttpResponse) {
           this.fileName= event.body;
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();

          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Não foi possivel fazer upload do arquivo!';
          }


          this.currentFile = undefined;
        });
    }
  }





}






