import {Component, Input} from '@angular/core';


@Component({
    selector: 'five-column-images',
    templateUrl: 'fiveColumnImages.html'
})

export class FiveColumnImages {

    @Input() images:string[] = [];


    constructor () {

    }



}
