import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private _ms: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this._ms.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
}
