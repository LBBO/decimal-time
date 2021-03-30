import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LandingpageRoutingModule } from './landingpage-routing.module'
import { SplashscreenComponent } from './splashscreen/splashscreen.component'
import { AppModule } from '../app.module'

@NgModule({
  declarations: [SplashscreenComponent],
  imports: [CommonModule, LandingpageRoutingModule, AppModule],
})
export class LandingpageModule {}
