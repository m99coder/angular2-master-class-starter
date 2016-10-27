import { Injectable } from '@angular/core';
import { EventBusArgs } from './models/event-bus-args';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {

  private messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this.messages$.next({type: eventType, data: data});
  }

  observe(eventType: string) {
    return this.messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }

}
