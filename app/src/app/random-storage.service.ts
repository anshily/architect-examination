import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RandomStorageService {

    constructor() {
    }

    setItem(key, value) {

        let wrap = JSON.parse(localStorage.getItem('random-tmp'));
        wrap[key] = value;
        localStorage.setItem('random-tmp', JSON.stringify(wrap));
    }

    getItem(key) {
        let wrap = JSON.parse(localStorage.getItem('random-tmp'));
        console.log(wrap);
        return wrap ? wrap[key] : null;
    }

    clearRandomStorage() {
        localStorage.setItem('random-tmp', '{}');
    }
}
