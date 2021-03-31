import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './navigation/navigation.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LandingpageRoutingModule } from './landingpage/landingpage-routing.module'
import { ClockModule } from './clock/clock.module'
import { LandingpageModule } from './landingpage/landingpage.module'
import { ScullyLibModule } from '@scullyio/ng-lib'
import { HistoryModule } from './history/history.module'
import { HistoryRoutingModule } from './history/history-routing.module'
import { AboutComponent } from './about/about.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [AppComponent, NavigationComponent, AboutComponent],
  imports: [
    BrowserModule,
    LandingpageRoutingModule,
    HistoryRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ClockModule,
    LandingpageModule,
    HistoryModule,
    ScullyLibModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
