import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequenceStorageService {

  constructor() { }


    setItem(key, value) {

        let wrap = JSON.parse(localStorage.getItem('sequence-tmp'));
        wrap[key] = value;
        localStorage.setItem('sequence-tmp', JSON.stringify(wrap));
    }

    getItem(key) {
        let wrap = JSON.parse(localStorage.getItem('sequence-tmp'));
        console.log(wrap);
        return wrap ? wrap[key] : null;
    }

    clearRandomStorage() {
        localStorage.setItem('sequence-tmp', '{}');
    }
}
