import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-feeds',
    templateUrl: './feeds.page.html',
    styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
    question;
    constructor() {
    }

    ngOnInit() {
    }

    updateResult(event) {
        console.log(event);
    }
}
