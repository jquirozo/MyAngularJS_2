import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html',
    styleUrls: [ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{	
	hero: Hero;
	
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];//convert the route parameter value to a number with the JavaScript (+) operator
			this.heroService.getHero(id)
		.then(hero => this.hero = hero);
		});
	}

	//navigates backward one step in the browser's history stack using the Location service
	goBack(): void {
		this.location.back();
	}

}
