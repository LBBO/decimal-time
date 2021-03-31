import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './navigation/navigation.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LandingpageRoutingModule } from './landingpage/landingpage-routing.module'
import { ClockModule } from './clock/clock.module'
import { LandingpageModule } from './landingpage/landingpage.module';
import { ScullyLibModule } from '@scullyio/ng-lib'

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    LandingpageRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ClockModule,
    LandingpageModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
