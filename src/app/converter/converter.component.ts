import { Component, OnInit } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'
import { NormalTime } from '../normal-time.service'
import { VTime } from '../v-time.service'
import { ControllableNormalTimeClockService } from '../controllable-normal-time-clock-service'
import { ControllableVTimeClockService } from '../controllable-v-time-clock-service'
import { FormControl } from '@angular/forms'
import { map, startWith } from 'rxjs/operators'

const parseIntOrZero = (value: string): number => {
  const parsed = parseInt(value)
  return isNaN(parsed) ? 0 : parsed
}

const timeInputPipe = [map(parseIntOrZero), startWith<number>(0)] as const

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  normalHoursInput: FormControl = new FormControl()
  normalMinutesInput: FormControl = new FormControl()
  normalSecondsInput: FormControl = new FormControl()
  hours$ = this.normalHoursInput.valueChanges.pipe(...timeInputPipe)
  minutes$ = this.normalMinutesInput.valueChanges.pipe(...timeInputPipe)
  seconds$ = this.normalSecondsInput.valueChanges.pipe(...timeInputPipe)
  private readonly normalTime$: Observable<NormalTime> = combineLatest(
    this.hours$,
    this.minutes$,
    this.seconds$,
  ).pipe(
    map(([hours, minutes, seconds]) => ({
      hours,
      minutes,
      seconds,
      milliseconds: 0,
    })),
  )
  readonly normalTimeService = new ControllableNormalTimeClockService(
    this.normalTime$,
  )

  vHoursInput: FormControl = new FormControl()
  vMinutesInput: FormControl = new FormControl()
  vSecondsInput: FormControl = new FormControl()
  vHours$ = this.vHoursInput.valueChanges.pipe(...timeInputPipe)
  vMinutes$ = this.vMinutesInput.valueChanges.pipe(...timeInputPipe)
  vSeconds$ = this.vSecondsInput.valueChanges.pipe(...timeInputPipe)
  private readonly vTime$: Observable<VTime> = combineLatest(
    this.vHours$,
    this.vMinutes$,
    this.vSeconds$,
  ).pipe(
    map(([v, deciV, milliV]) => ({
      v,
      deciV,
      milliV,
    })),
  )
  readonly vTimeService = new ControllableVTimeClockService(this.vTime$)

  constructor() {}

  ngOnInit(): void {}
}
