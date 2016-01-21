import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <ul class="heroes">
                    <li *ngFor="#hero of heroes"
                    [class.selected]="hero === selectedHero"
                    (click)="onSelect(hero)">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                `,
    styleUrls: ['app/app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    constructor(private _heroService: HeroService) {
        // complex logic out of the constructor,
        // especially anything that might call a server as a data access method is sure to do.
    }
    ngOnInit() {
        this.getHeroes();
    }
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];
    // We don't really need a dedicated method to wrap one line. We write it anyway:
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
