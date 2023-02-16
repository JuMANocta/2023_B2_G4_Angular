import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  //hero = 'Windstorm';
  // heroes = HEROES;
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  heroes: Hero[] = [];

  ngOnInit(): void {
    console.log('HeroesComponent.ngOnInit()');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // this.heroService.getHeroes().subscribe(
    //   (heroes) => {
    //     this.heroes = heroes;
    //   }
    //une fonction fléchée est de nature
    // =>
    // ()=>{}
    // function(){}
    console.log('HeroesComponent.getHeroes()')
  }
  
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: l'id du héro est ${hero.id}`)
  }
}
