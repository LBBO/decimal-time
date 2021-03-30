import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { ITimeService } from '../ITimeService'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  @Input()
  timeService?: ITimeService

  @HostBinding('style.--large-intervals')
  private numOfLargeIntervals = 0
  @HostBinding('style.--small-intervals')
  private numOfSmallIntervals = 0

  @HostBinding('style.--progress-large-hand')
  private progressLargeHand = 0
  @HostBinding('style.--progress-small-hand')
  private progressSmallHand = 0
  @HostBinding('style.--progress-chrono')
  private progressChrono = 0

  constructor() {}

  ngOnInit(): void {
    if (this.timeService) {
      this.numOfLargeIntervals = this.timeService.numOfLargeIntervals
      this.numOfSmallIntervals = this.timeService.numOfSmallIntervals
      const timeService = this.timeService

      const [
        smallHandValue$,
        largeHandValue$,
        chronoValue$,
      ] = this.timeService.getTime()

      largeHandValue$.subscribe((val) => {
        this.progressLargeHand =
          (val / timeService.maxLargeHandValue) % timeService.maxLargeHandValue
      })
      smallHandValue$.subscribe((val) => {
        this.progressSmallHand =
          (val / timeService.maxSmallHandValue) % timeService.maxSmallHandValue
      })
      chronoValue$.subscribe((val) => {
        this.progressChrono =
          (val / timeService.maxChronoValue) % timeService.maxChronoValue
      })
    }
  }
}
