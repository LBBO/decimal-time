import { ITimeService } from './ITimeService'
import { NormalTime } from './normal-time.service'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

export class ControllableNormalTimeClockService implements ITimeService {
  clockIntervals = new Array(12).fill(1).map((_, index) => index + 1)
  readonly numOfLargeIntervals = 12
  readonly numOfSmallIntervals = 5
  readonly maxSmallHandValue = 12
  readonly maxLargeHandValue = 60
  readonly maxChronoValue = 60

  constructor(private readonly time$: Observable<NormalTime>) {}

  getTime(): Array<Observable<number>> {
    const time$ = this.time$
    return [
      time$.pipe(pluck('hours')),
      time$.pipe(pluck('minutes')),
      time$.pipe(pluck('seconds')),
    ]
  }
}
