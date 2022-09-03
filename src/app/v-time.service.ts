import { Injectable, OnDestroy } from '@angular/core'
import { ITimeService } from './ITimeService'
import { Observable, Subject } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

type VTime = {
  v: number,
  deciV: number,
  milliV: number
}

type NormalTime = {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

@Injectable({
  providedIn: 'root',
})
export class VTimeService implements ITimeService, OnDestroy {
  readonly clockIntervals = new Array(100).fill(1).map((_, index) => index)
  readonly numOfLargeIntervals = 10
  readonly numOfSmallIntervals = 10
  readonly maxSmallHandValue = 10
  readonly maxLargeHandValue = 100
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

  convertNormalTimeToVTime(
    normalTime: NormalTime,
  ): VTime {
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    const millisecondsPerV = millisecondsPerDay / 10
    const millisecondsPerDeciV = millisecondsPerV / 100
    const millisecondsPerMilliV = millisecondsPerV / 10_000
    const totalMinutesPassed = normalTime.hours * 60 + normalTime.minutes
    const totalSecondsPassed = totalMinutesPassed * 60 + normalTime.seconds
    const totalMillisecondsPassed =
      totalSecondsPassed * 1000 + normalTime.milliseconds
    return {
      milliV: Math.floor(totalMillisecondsPassed / millisecondsPerMilliV) % 100,
      deciV: Math.floor(totalMillisecondsPassed / millisecondsPerDeciV) % 100,
      v: Math.floor(totalMillisecondsPassed / millisecondsPerV) % 10,
    }
  }

  convertVTimeToNormalTime(
    vTime: VTime,
  ): NormalTime {
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    const millisecondsPerV = millisecondsPerDay / 10
    const millisecondsPerMilliV = millisecondsPerV / 10_000

    const totalDeciVPassed = vTime.v * 100 + vTime.deciV
    const totalMilliVPassed = vTime.milliV + totalDeciVPassed * 100

    const totalMillisecondsPassed = totalMilliVPassed * millisecondsPerMilliV
    const totalSecondsPassed = totalMillisecondsPassed / 1_000
    const totalMinutesPassed = totalSecondsPassed / 60
    const totalHoursPassed = totalMinutesPassed / 60

    return {
      hours: Math.floor(totalHoursPassed % 24),
      minutes: Math.floor(totalMinutesPassed % 60),
      seconds: Math.floor(totalSecondsPassed % 60),
      milliseconds: Math.floor(totalMillisecondsPassed % 1_000),
    }
  }

  private updateTime(): void {
    const now = new Date()
    const { deciV, milliV, v } = this.convertNormalTimeToVTime({
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    })
    this.#milliV$.next(
      milliV,
    )
    this.#deciV$.next(
      deciV,
    )
    this.#v$.next(v)
  }
}
