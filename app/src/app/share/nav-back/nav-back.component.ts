import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-nav-back',
  templateUrl: './nav-back.component.html',
  styleUrls: ['./nav-back.component.scss'],
})
export class NavBackComponent implements OnInit {

  @Input() title;

  constructor(private navController: NavController) { }

  ngOnInit() {}

  navBack() {
    this.navController.pop().then();
  }

}
