/**
 * Created by smiracle on 9/27/16.
 */
import {Component, Input} from '@angular/core';


@Component({
    selector: 'video-content',
    templateUrl: 'videoContent.html'
})

export class VideoContent {

    @Input() content:any = {
        "headline" : "Sample Headline",
        "paragraph" : "Sample paragraph"
    };

    @Input() videoUrl:string = '';


    constructor () {


    }

}
