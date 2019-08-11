import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrong-question',
  templateUrl: './wrong-question.component.html',
  styleUrls: ['./wrong-question.component.scss'],
})
export class WrongQuestionComponent implements OnInit {
  @Input() title;
  @Input() rate;
  @Input() err;
  @Input() all;

  constructor() { }

  ngOnInit() {}

}
