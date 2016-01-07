import {Component} from 'angular2/angular2';
import {DataService} from '../../service/data';
import {SoundcloudService} from '../../common/services/soundcloud.service';


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
  
  inputs: ['soundcloud'],
  providers: [SoundcloudService]
})
export class SoundcloudComponent {
  constructor(dataService: DataService, sCloudService: SoundcloudService) {
    this.dataService = dataService;
    this.sCloudService = sCloudService;
    this.soundcloud = null;
  }

  onInit() {
    console.log(this.dataService);
    console.log(this.sCloudService);
    this.soundcloud = this.dataService.getSoundcloud(); 
  }
  
}