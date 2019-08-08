import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

    formatDateTime(inputTime) {
        const time = new Date(parseInt(inputTime));
        const y = time.getFullYear();
        const m = time.getMonth() + 1;
        const min = m < 10 ? ('0' + m) : m;
        const d = time.getDate();
        const day = d < 10 ? ('0' + d) : d;
        const h = time.getHours();
        const hours = h < 10 ? ('0' + h) : h;
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const minutes = minute < 10 ? ('0' + minute) : minute;
        const seconds = second < 10 ? ('0' + second) : second;
        // return y + '.' + min + '.' + day;
        return y + '-' + min + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
}
