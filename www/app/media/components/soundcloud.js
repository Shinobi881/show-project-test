import {Component} from 'angular2/angular2';
import {DataService} from '../../service/data';


@Component({
  selector: 'soundcloud',
  template: `<ion-card *ng-for="#stream of soundcloud" class="scstream">
    <ion-card-content>
      <ion-list>
        <ion-header (click)="playMedia">
          Soundcloud Stream
        </ion-header>

        <button ion-item (click)="playMedia(stream)">{{ stream.title }}</button>
        
      </ion-list>
    </ion-card-content>
  </ion-card>`,
  
  inputs: ['soundcloud']
})
export class SoundcloudComponent {
  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.soundcloud = null;
  }

  onInit() {
    console.log(DataService);
    this.soundcloud = this.dataService.getSoundcloud(); 
  }
  
}