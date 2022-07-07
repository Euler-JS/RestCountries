import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoManagerService {
  base_url= "https://restcountries.com/v2/"
  all_Data = []
  constructor(
    private http: HttpClient,
  ) { }
  //nome, capital, região, sub-região, população, área, fuso horário, nome nativo e a bandeira
  getAllCountries()
  {
    this.all_Data = []
    this.http.get(this.base_url +'all?fields=name,capital,region,subregion,population,area,timezones,nativeName,flags')
    .subscribe(
      (res:[])=>{
        {
          console.log(res)
          this.all_Data = [...res];
        }
      }
    ) 
  }


}
