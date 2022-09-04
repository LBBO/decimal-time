import { ITimeService } from './ITimeService'
import { Observable } from 'rxjs'
import { VTime } from './v-time.service'
import { pluck } from 'rxjs/operators'

export class ControllableVTimeClockService implements ITimeService {
  readonly clockIntervals = new Array(100).fill(1).map((_, index) => index)
  readonly numOfLargeIntervals = 10
  readonly numOfSmallIntervals = 10
  readonly maxSmallHandValue = 10
  readonly maxLargeHandValue = 100
  readonly maxChronoValue = 100

  constructor(private readonly time$: Observable<VTime>) {}

  getTime(): Array<Observable<number>> {
    const time$ = this.time$
    return [
      time$.pipe(pluck('v')),
      time$.pipe(pluck('deciV')),
      time$.pipe(pluck('milliV')),
    ]
  }
}
