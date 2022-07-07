import { Component } from '@angular/core';
import { InfoManagerService } from '../services/info-manager.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private info: InfoManagerService) {
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

}
