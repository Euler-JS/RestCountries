import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoManagerService {
  base_url= "https://restcountries.com/v3.1/"
  constructor(
    private http: HttpClient,
  ) { }

  getAllCountries()
  {
    this.http.get(this.base_url +'all').subscribe(
      (res=>{
        {
          console.log("ALl Data from API ",res)
        }
      })
    ) 
  }
}
