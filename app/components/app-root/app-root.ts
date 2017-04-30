import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app/components/app-root/app-root.html',
    styleUrls: ['app/components/app-root/app-root.css']
})
export class AppRoot {
    title: string;

    constructor() {
        this.title = 'My Angular App';
    }
}