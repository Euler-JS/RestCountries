import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoManagerService {
  base_url= "https://restcountries.com/v2/"
  all_Data = []
  selectedInfo = null
  constructor(
    private http: HttpClient,
  ) { }
  //nome, capital, região, sub-região, população, área, fuso horário, nome nativo e a bandeira
  async getAllCountries()
  {
    this.all_Data = []
    await this.http.get(this.base_url +'all?fields=name,capital,region,subregion,population,area,timezones,nativeName,flags')
    .subscribe(
      (res:[])=>{
        {
          console.log(res);
          
          this.all_Data = [...res];
        }
      }
    ) 
  }

  async selectCountry(countryName)
  {
    await this.http.get(this.base_url +'name/'+countryName+ '?fields=name,capital,region,subregion,population,area,timezones,nativeName,flags')
    .subscribe(
      (res)=>{
        {
          this.selectedInfo = res[0]
        }
      }
    ) 
  }


}
