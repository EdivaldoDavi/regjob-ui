import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'regjob-ui';

  constructor(
    private config: PrimeNGConfig,
      private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {

  }
}
