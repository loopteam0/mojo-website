import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToClass: EventEmitter<string> = new EventEmitter();

  
}


