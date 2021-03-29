import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';


@NgModule({
  declarations: [SplashscreenComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
