import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-practicing',
  templateUrl: './options-practicing.page.html',
  styleUrls: ['./options-practicing.page.scss'],
})
export class OptionsPracticingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    updateResult(event, i) {
    console.log(event, i);
        // console.log(this.questionArr[i]['res'] = event);
        // console.log(this.questionArr[i]);
    }

}
