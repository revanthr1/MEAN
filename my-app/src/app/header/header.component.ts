import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { Currentweather } from '../currentweather'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private ws:WeatherService) { }

  ngOnInit() {
    
  }

}
