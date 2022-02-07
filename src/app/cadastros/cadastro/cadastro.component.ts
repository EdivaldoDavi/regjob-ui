import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


export interface Food {
  value: string;
  display: string;
}
/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}

