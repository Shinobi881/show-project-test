import {App, IonicApp, IonicPlatform} from 'ionic/ionic';
import {Injectable, bind} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class DataService {
  constructor(app: IonicApp, http: Http) {
    this.app = app;
    this.http = http;
    this.conferenceInfo = null;
    this.scheduleInfo = null;
    this.speakers = null;
    this.categories = null;
    this.soundcloud = null;
  }

  retrieveData() {
    //Under the hood we are using Angular http service.
    //This defaults to use the HTTP_BINDING for http requests.
    //Here, we're going to get a JSON data file, use the `map` call to parse json
    // and finally subscribe to the observable and set our data
    //to the value it provides once the http request is complete.
    this.http.get('app/data/info.json')
      .map(res => res.json())
      .subscribe(data => {
        this.conferenceInfo = data;
      });

    this.http.get('app/data/schedule.json')
      .map(res => res.json())
      .subscribe(data => {
        this.scheduleInfo = data;
      });

    this.http.get('app/data/speakers.json')
      .map(res => res.json())
      .subscribe(data => {
        this.speakers = data;
      });

    this.http.get('app/data/categories.json')
      .map(res => res.json())
      .subscribe(data => {
        this.categories = data;
      });

    this.http.get('app/data/soundcloud.json')
      .map(res => res.json())
      .subscribe(data => {
        console.log("Data object from soundcloud", data);
        this.soundcloud = data;
    });
  }

  getData() {
    return this.conferenceInfo;
  }

  getSoundcloud(){
     return this.soundcloud;
  }

  getSchedule() {
    return this.scheduleInfo;
  }

  getSpeakers() {
    return this.speakers;
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(categories) {
    this.categories = categories;
  }

  showCategory(sessionCategory) {
    var categories = this.getCategories() || [],
        showFilter = true;

    categories.forEach((category) => {
      if(category.name == sessionCategory) {
        showFilter = category.showFilter;
      }
    });

    // if there are no categories just return true
    return showFilter;
  }
}
