import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

import {MatInputModule} from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    MessageComponent,
    FileuploadComponent

  ],
  exports: [MessageComponent, FileuploadComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ]
})
export class SharedModule { }
