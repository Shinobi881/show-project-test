import {NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Act} from '../action/action';
import {Learn} from '../media/media';
import {Home} from '../home/home';
import {News} from '../news/news';

@Page({
  templateUrl: 'app/tabs/tabs.html',
  providers: [DataService]
})
export class Tabs {
  constructor(nav: NavController, dataService: DataService) {
    // set the root pages for each tab
    this.tab1Root = Home;
    this.tab2Root = News;
    this.tab3Root = Learn;
    this.tab4Root = Act;

    // retrieve the conference data
    dataService.retrieveData();
  }
}
