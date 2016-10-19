import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'PageLayout1',
    templateUrl: 'pageLayout1.html'
})

export class PageLayout1 {

    content: {};
    route:ActivatedRoute;


    constructor (route: ActivatedRoute) {

        this.content = {};
        this.route = route;

    }


    ngOnInit() {

        this.route.data.subscribe( v => this.content = v );

    }


}
