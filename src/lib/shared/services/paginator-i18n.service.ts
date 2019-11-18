import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class PaginatorI18nService extends MatPaginatorIntl {

  itemsPerPageLabel: string;
  nextPageLabel: string;
  previousPageLabel: string;
  firstPageLabel: string;
  lastPageLabel: string;
  ofLabel: string;
  zeroOfLabel: string;

  constructor(private translationService: TranslationService) {
    super();
    this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
    this.nextPageLabel = this.translationService.getForKey('Next page');
    this.ofLabel = this.translationService.getForKey('of');
    this.previousPageLabel = this.translationService.getForKey('Previous page');
    this.firstPageLabel = this.translationService.getForKey('First page');
    this.lastPageLabel = this.translationService.getForKey('Last page');
    this.zeroOfLabel = this.translationService.getForKey('0 of');
    this.changes.next();
    this.translationService.cultureChange.subscribe(x => {
      this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
      this.nextPageLabel = this.translationService.getForKey('Next page');
      this.ofLabel = this.translationService.getForKey('of');
      this.previousPageLabel = this.translationService.getForKey('Previous page');
      this.firstPageLabel = this.translationService.getForKey('First page');
      this.lastPageLabel = this.translationService.getForKey('Last page');
      this.zeroOfLabel = this.translationService.getForKey('0 of');
      this.changes.next();
    });
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {

    if (length === 0 || pageSize === 0) {
      return this.zeroOfLabel + ' ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' ' + this.ofLabel + ' ' + length;
  }
}
