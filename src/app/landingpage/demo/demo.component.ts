import { Component, OnInit } from '@angular/core'
import { NormalTimeClockService } from '../../normal-time-clock.service'
import { VTimeClockService } from '../../v-time-clock.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(
    public normalTimeClockService: NormalTimeClockService,
    public vTimeClockService: VTimeClockService,
  ) {}

  ngOnInit(): void {}
}
