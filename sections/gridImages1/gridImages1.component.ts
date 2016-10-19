/**
 * Created by smiracle on 9/27/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'grid-images-1',
    templateUrl: 'gridImages1.html'
})

export class GridImages1 {

    @Input() images: string[] = [];


    constructor () {

    }



}
