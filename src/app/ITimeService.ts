import { Observable } from 'rxjs'

export interface ITimeService {
  readonly clockIntervals: number[]
  readonly numOfLargeIntervals: number
  readonly numOfSmallIntervals: number
  readonly maxLargeHandValue: number
  readonly maxSmallHandValue: number
  readonly maxChronoValue: number

  getTime(): Array<Observable<number>>
}
