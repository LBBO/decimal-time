import { Observable } from 'rxjs'

export interface ITimeService {
  readonly clockIntervals: number[]

  getTime(): Array<Observable<number>>
}
