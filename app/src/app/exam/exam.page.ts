import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(res => {
      console.log(res);
    })
  }

}
