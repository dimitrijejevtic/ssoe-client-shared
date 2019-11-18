import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-general-error-page',
  templateUrl: './general-error-page.component.html',
  styleUrls: ['./general-error-page.component.css']
})
export class GeneralErrorPageComponent implements OnInit {

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
  }

}
