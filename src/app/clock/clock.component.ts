import { Component, Input, OnInit } from '@angular/core'
import { ITimeService } from '../ITimeService'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  @Input()
  timeService?: ITimeService

  constructor() {}

  ngOnInit(): void {}
}
