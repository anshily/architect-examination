import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequenceStorageService {

  constructor() {
  }

    setItem(key, value) {

      console.log(value);
        let wrap = {};
      if (localStorage.getItem('sequence-tmp')) {
          wrap = JSON.parse(localStorage.getItem('sequence-tmp'));
      }
        // let wrap = JSON.parse(localStorage.getItem('sequence-tmp'));
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
