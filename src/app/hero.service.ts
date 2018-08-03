import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({providedIn: 'root'})
export class HeroService {
  // Angular 将会在创建 HeroService 时把 MessageService 的单例 注入到这个属性中。
  constructor(private messageService: MessageService) {
  }

  // getHeroes(): Hero[] {   return HEROES; }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this
      .messageService
      .add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // 反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
