import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor/Actor';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddActorComponent implements OnInit {
  actor: Actor;
  constructor() { }

  ngOnInit() {
  }

}
