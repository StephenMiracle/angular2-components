/**
 * Created by smiracle on 9/27/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'banner',
    templateUrl: 'banner.html'
})

export class Banner {

    @Input() image: string = '';


    constructor () {



    }



}
