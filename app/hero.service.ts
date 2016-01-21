import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';


@Injectable() // Don't forget the parentheses! Neglecting them leads to an error that's difficult to diagnose.
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);;
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}