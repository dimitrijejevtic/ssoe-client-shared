import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ICommandContract } from '../interfaces/ICommandContract';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private apiService: ApiService, private translateService: TranslationService) { }

  private locationCache: { [id: string]: any } = {};
  // TODO: write calling query method using ICommandContract

  public post(zone: string, route: string, contract: ICommandContract) {
    return this.apiService.post(zone, route, undefined, contract);
  }

}
