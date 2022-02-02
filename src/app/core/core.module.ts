
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import localePt from '@angular/common/locales/pt';
import { ErrorHandlerService } from './error-handler.service';

import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AuthService } from './../seguranca/auth.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { NavbarComponent } from './navbar/navbar.component';
registerLocaleData(localePt, 'pt-BR');

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [

    PaginaNaoEncontradaComponent,
     NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule,



    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule,
    NavbarComponent

  ],
  providers: [
    MessageService,
    ErrorHandlerService,
    ConfirmationService,
    TranslateService,
    AuthService,
    Title

  ]
})
export class CoreModule { }
