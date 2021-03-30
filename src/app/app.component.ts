import { Component } from '@angular/core'
import { NormalTimeService } from './normal-time.service'
import { VTimeService } from './v-time.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'decimal-time'

  constructor(
    public normalTimeService: NormalTimeService,
    public vTimeService: VTimeService,
  ) {}
}
