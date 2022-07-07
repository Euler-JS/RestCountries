import { Component } from '@angular/core';
import { InfoManagerService } from '../services/info-manager.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  see = [];
  auxiliar_list = []
  infoData = null

  constructor(private info: InfoManagerService) {
  }
  
  ionViewDidEnter()
  {
    this.auxiliar_list = [...this.info.all_Data];
  }

  getItems(ev) {
    let query = ev.target.value.toLowerCase()
    this.procurarProduto(query)
  }

  procurarProduto(query) {
    
    requestAnimationFrame(() => {
      this.see = []
      this.auxiliar_list.forEach(x => {
        let list = x.search = x.name
        if (query.length > 1 && query.trim() != '') {
          let shouldShow = list.toLowerCase().indexOf(query) > -1;
          this.see.push(shouldShow)
        }
        this.see.slice(0,4)
      });
    });
  }

  async selectCountry(countryName)
  {
    this.infoData = await this.info.selectCountry(countryName)
    let item = <HTMLElement> document.getElementById("card_item_search");
    let searchBar = <HTMLInputElement> document.getElementById("searchCountry");
    try {
      item.style.display = "none"
    } catch (error) {
      console.log("Error trying to hide the card");
    }
    
    searchBar.value = ""
  }
  view()
  {
    let item = <HTMLElement> document.getElementById("card_item_search");
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
      console.log('Async operation has ended');
      this.auxiliar_list = [...this.info.all_Data];
      event.target.complete();
    }, 4000);
  }

}
