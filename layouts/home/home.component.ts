import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class Home implements OnInit {

    content: any;
    title: string;
    route: any;
    sub: any;
    data: any;

    constructor (route: ActivatedRoute) {

        this.title = '';
        this.content = {};
        this.route = route;

    }


    ngOnInit() {
        this.route.data.subscribe( v => this.content = v );
    }

}
