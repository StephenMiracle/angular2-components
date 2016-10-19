/**
 * Created by smiracle on 9/27/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'text-callout',
    templateUrl: 'textCallout.html'
})

export class TextCallout {

    @Input() callout = 'test';

    constructor () {


    }



}
