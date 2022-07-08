import { Component } from '@angular/core';
import { InfoManagerService } from '../services/info-manager.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  all_DataCopy = []
  page = 1
  constructor(private info: InfoManagerService) {
  }

  ionViewDidEnter()
  {
    this.all_DataCopy = this.info.all_Data.slice(0,10)
  }

  view(itemId)
  {
    let item = <HTMLElement> document.getElementById("card_item_"+itemId);
    if(item.style.display == "none")
    {
      item.style.display = "block";
    }
    else
    {
      item.style.display = "none";
    }
  }
  refresh(event) {
    this.info.getAllCountries()
    setTimeout(() => {
      event.target.complete();
    }, 4000);
  }

  loadMore(event) {
    setTimeout(() => {
      this.all_DataCopy = this.info.all_Data.slice(0, (10 * this.page) + 9)
      this.page++
      event.target.complete();
      if (this.info.all_Data.length == this.all_DataCopy.length) {
        event.target.disabled = true;
      }
    }, 200);
  }

}
