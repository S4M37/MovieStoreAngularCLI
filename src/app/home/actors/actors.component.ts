import {Component, OnInit} from '@angular/core';
import {Actor} from '../../actor/Actor';
import {ActorService} from '../../actor/service/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Array<Actor>;

  constructor(private actorService: ActorService) {
    this.actors = [];
  }

  ngOnInit() {

    this.actorService.getAllActors().subscribe(data => {
      this.actors = data;
    }, error => {

    });
  }

}
