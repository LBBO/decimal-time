import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './navigation/navigation.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LandingpageRoutingModule } from './landingpage/landingpage-routing.module'
import { ClockComponent } from './clock/clock.component'

@NgModule({
  declarations: [AppComponent, NavigationComponent, ClockComponent],
  imports: [
    BrowserModule,
    LandingpageRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ClockComponent],
})
export class AppModule {}
