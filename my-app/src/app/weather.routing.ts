import { RouterModule,Routes } from '@angular/router';


import { CurrentComponent } from './current/current.component'
import { ForcastComponent } from './forcast/forcast.component';
import { ModuleWithProviders } from '@angular/core';

const weather_router : Routes=[
    {path:'', component: CurrentComponent},
    {path:'forecast', component:ForcastComponent}
]


export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(weather_router)