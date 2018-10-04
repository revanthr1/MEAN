import { Currentweather } from './currentweather';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  Current:Currentweather = new Currentweather('New Jersey','85','http://download.spinetix.com/content/widgets/icons/weather/sunny.png','sunny','96','72')
  constructor(private http:Http) { }


  weatherNow(){
    return this.Current;
    console.log(this.Current);
  }
  localWeather(lat:string,lon:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d0ec2bea18424faa1bbf25844ee2812&units=imperial`).pipe(map((response:Response)=>
    response.json()));
  }

}
