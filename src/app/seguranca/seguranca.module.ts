import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { SegurancaRoutingModule } from './seguranca-routing.module';


export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({

  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/kaspper/oauth/token']
      }
    }),

    InputTextModule,
    ButtonModule,



    SegurancaRoutingModule
  ],

  providers: [JwtHelperService]

})
export class SegurancaModule { }
