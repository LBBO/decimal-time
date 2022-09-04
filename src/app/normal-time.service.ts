import { Injectable, OnDestroy } from '@angular/core'
import { Observable, Subject, combineLatest } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

export type NormalTime = {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

@Injectable({
  providedIn: 'root',
})
export class NormalTimeService implements OnDestroy {
  #milliseconds$ = new Subject<number>()
  #seconds$ = new Subject<number>()
  #minutes$ = new Subject<number>()
  #hours$ = new Subject<number>()
  readonly #interval?: ReturnType<typeof setInterval>

  public readonly time$: Observable<NormalTime> = combineLatest(
    this.#hours$.pipe(distinctUntilChanged()), this.#minutes$.pipe(distinctUntilChanged()),
    this.#seconds$.pipe(distinctUntilChanged()),
    this.#milliseconds$.pipe(distinctUntilChanged()),
  )
    .pipe(map(([hours, minutes, seconds, milliseconds]): NormalTime => (
      {
        hours, minutes, seconds, milliseconds,
      }
    )))

  constructor() {
    this.#interval = setInterval(this.updateTime.bind(this), 100)
  }

  static getCurrentTime(): NormalTime {
    const now = new Date()
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    }
  }

  ngOnDestroy(): void {
    if (this.#interval) {
      clearInterval(this.#interval)
    }
  }

  private updateTime(): void {
    const now = new Date()
    this.#milliseconds$.next(now.getMilliseconds())
    this.#seconds$.next(now.getSeconds())
    this.#minutes$.next(now.getMinutes())
    this.#hours$.next(now.getHours())
  }
}
