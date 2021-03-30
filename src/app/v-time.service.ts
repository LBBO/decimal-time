import { Injectable, OnDestroy } from '@angular/core'
import { ITimeService } from './ITimeService'
import { Observable, Subject } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class VTimeService implements ITimeService, OnDestroy {
  readonly clockIntervals = new Array(100).fill(1).map((_, index) => index)
  readonly numOfLargeIntervals = 10
  readonly numOfSmallIntervals = 10
  readonly maxSmallHandValue = 100
  readonly maxLargeHandValue = 10
  readonly maxChronoValue = 100

  #milliV$ = new Subject<number>()
  #deciV$ = new Subject<number>()
  #v$ = new Subject<number>()
  milliV$ = this.#milliV$.pipe(distinctUntilChanged())
  deciV$ = this.#deciV$.pipe(distinctUntilChanged())
  v$ = this.#v$.pipe(distinctUntilChanged())

  readonly #interval?: ReturnType<typeof setInterval>

  constructor() {
    this.#interval = setInterval(this.updateTime.bind(this), 100)
  }

  ngOnDestroy(): void {
    if (this.#interval) {
      clearInterval(this.#interval)
    }
  }

  getTime(): Array<Observable<number>> {
    return [this.v$, this.deciV$, this.milliV$]
  }

  private updateTime(): void {
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    const millisecondsPerV = millisecondsPerDay / 100
    const millisecondsPerDeciV = millisecondsPerV / 10
    const millisecondsPerMilliV = millisecondsPerV / 1_000
    const now = new Date()
    const totalMinutesPassed = now.getHours() * 60 + now.getMinutes()
    const totalSecondsPassed = totalMinutesPassed * 60 + now.getSeconds()
    const totalMillisecondsPassed =
      totalSecondsPassed * 1000 + now.getMilliseconds()
    this.#milliV$.next(
      Math.floor(totalMillisecondsPassed / millisecondsPerMilliV) % 100,
    )
    this.#deciV$.next(
      Math.floor(totalMillisecondsPassed / millisecondsPerDeciV) % 10,
    )
    this.#v$.next(Math.floor(totalMillisecondsPassed / millisecondsPerV) % 100)
  }
}
