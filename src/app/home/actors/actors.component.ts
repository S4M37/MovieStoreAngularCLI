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

  deleteActor(actor: Actor, indice: number) {
    console.log(actor.name);
    this.actorService.deleteActor(actor.id).subscribe();
    this.actors.splice(indice, 1);
  }

  editActor(actor: Actor, indice: number) {

  }
}
