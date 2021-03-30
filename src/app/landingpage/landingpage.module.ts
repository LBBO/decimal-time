import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LandingpageRoutingModule } from './landingpage-routing.module'
import { SplashscreenComponent } from './splashscreen/splashscreen.component'
import { DemoComponent } from './demo/demo.component'
import { ClockModule } from '../clock/clock.module'
import { LandingpageComponent } from './landingpage.component'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [LandingpageComponent, SplashscreenComponent, DemoComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    ClockModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class LandingpageModule {}
