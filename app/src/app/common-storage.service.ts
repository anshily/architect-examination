import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonStorageService {

  constructor() { }

    setItem(primary = 'anshi', key, value) {
        let wrap = {};
        if (localStorage.getItem(primary)) {
            wrap = JSON.parse(localStorage.getItem(primary));
        }
        wrap[key] = value;
        localStorage.setItem(primary, JSON.stringify(wrap));
    }

    getItem(primary = 'anshi', key) {
        let wrap = JSON.parse(localStorage.getItem(primary));
        // console.log(wrap);
        return wrap ? wrap[key] : null;
    }

    clearStorage(primary = 'anshi') {
        localStorage.setItem(primary, '{}');
    }
}
