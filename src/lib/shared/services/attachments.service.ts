import { Injectable } from '@angular/core';
import { QueryService } from './query.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  constructor(private queryService: QueryService) { }

  public openBlob(blob, fileName) {
    const link = document.createElement('a');
    document.body.appendChild(link);

    link.href = window.URL.createObjectURL(blob.body);
    link.download = fileName;
    link.style.display = 'none';
    link.target = '_self';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    setTimeout(() => {
      window.URL.revokeObjectURL(link.href);
    }, 100);
  }

  public downloadFile(objectId, fileName) {
    return this.queryService.getBlobDocument('common', 'downloadFile/' + objectId).pipe(tap(x => {
      this.openBlob(x, fileName);
    }));
  }
}
