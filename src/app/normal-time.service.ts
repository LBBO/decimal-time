import { Injectable, OnDestroy } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'
import { ITimeService } from './ITimeService'

@Injectable({
  providedIn: 'root',
})
export class NormalTimeService implements OnDestroy, ITimeService {
  #seconds$ = new Subject<number>()
  #minutes$ = new Subject<number>()
  #hours$ = new Subject<number>()
  seconds$ = this.#seconds$.pipe(distinctUntilChanged())
  minutes$ = this.#minutes$.pipe(distinctUntilChanged())
  hours$ = this.#hours$.pipe(distinctUntilChanged())
  readonly #interval?: ReturnType<typeof setInterval>
  clockIntervals = new Array(12).fill(1).map((_, index) => index + 1)

  constructor() {
    this.#interval = setInterval(this.updateTime.bind(this), 100)
  }

  ngOnDestroy(): void {
    if (this.#interval) {
      clearInterval(this.#interval)
    }
  }

  getTime(): Array<Observable<number>> {
    return [this.hours$, this.minutes$, this.seconds$]
  }

  private updateTime(): void {
    const now = new Date()
    this.#seconds$.next(now.getSeconds())
    this.#minutes$.next(now.getMinutes())
    this.#hours$.next(now.getHours())
  }
}
