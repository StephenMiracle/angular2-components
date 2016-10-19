/**
 * Created by smiracle on 9/27/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'banner-2',
    templateUrl: 'banner2.html'
})

export class Banner2 {

    @Input() image: string = '';


    constructor () {

    }



}
