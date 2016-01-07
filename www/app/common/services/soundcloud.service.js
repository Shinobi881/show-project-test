import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {Injectable, bind} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class SoundcloudService {
  constructor(app: IonicApp, http: Http) {
    this.app = app;
    this.http = http;
    this.soundcloud = null;
  }

  retrieveData() {
    //Under the hood we are using Angular http service.
    //This defaults to use the HTTP_BINDING for http requests.
    //Here, we're going to get a JSON data file, use the `map` call to parse json
    // and finally subscribe to the observable and set our data
    //to the value it provides once the http request is complete.
    
    //////////////// SHORTENED SOUNDCLOUD DATA /////////////////
    // this.http.get('app/data/soundcloud.json')
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     console.log("Data object from soundcloud", data);
    //     this.soundcloud = data;
    // });


    /////////////// LONGFORM SOUNDCLOUD DATA ///////////////////
    this.http.get('app/data/soundcloud2.json')
      .map(res => res.json())
      .subscribe(data => {
        console.log("Data object from soundcloud", data);
        this.soundcloud = data;
    });
  }

  getSoundcloud(){
     return this.soundcloud;
  }

  
}
