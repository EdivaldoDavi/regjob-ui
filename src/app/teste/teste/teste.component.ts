import { HttpClient } from '@angular/common/http';
import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { VagaService } from 'src/app/services/vaga.service';

export interface Vaga {
  id: number,
  descricao: string;
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

export class TesteComponent implements OnInit {

  @Input() valor: any = "";
  @Output() mudouValor = new EventEmitter;
  @Output() mudouOption = new EventEmitter;
  @Input() opt: any = "";
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }



  myControl! : FormGroup;
 //options: VagaBusca[] = [{descricao: 'Mary'}, {descricao: 'Shelley'}, {descricao: 'Igor'}];
 options: Vaga[] = [];
  codigoVaga!: number ;
 @Output() filteredOptions!: Observable<Vaga[]>;
  @Input() vagaTeste!: any;
  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private service: VagaService

  ) { }

  ngOnInit() {

    this.myControl = this.fb.group({
     id: [],
      descricao : ['']
    })
    this.service.list().subscribe(dados => this.options = dados);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),

       map(value => (typeof value === 'string' ? value : value.descricao)),
      map(descricao => (descricao ? this._filter(descricao) : this.options.slice())),

    );
  }
    displayFn(options: Vaga[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options) ? options.find(option => option.id === id) : null;
      this.mudouOption.emit( id);
      return correspondingOption ? correspondingOption.descricao : '';

    }

  }

 // displayFn(vaga: Vaga): string {
//
 //   return vaga && vaga.id+"-"+vaga.descricao ? vaga.id+"-"+vaga.descricao : '';
 // }

  private _filter(descricao: string): Vaga[] {
    const filterValue = descricao;

    return this.options.filter(option => option.descricao.toLowerCase().includes(filterValue));
  }

}
