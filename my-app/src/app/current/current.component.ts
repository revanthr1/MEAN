import { Component, OnInit } from '@angular/core';
import { Currentweather } from '../currentweather';
import { WeatherService } from '../weather.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

myWeather:Currentweather;
location

  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather= this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location = pos.coords;
      const lat = this.location.lattitude;
      const lon = this.location.longitude;
      this.ws.localWeather(lat, lon).subscribe((data)=>{
        console.log(data);
      })
    })
  }

}
