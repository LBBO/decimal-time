import { Component, OnInit } from '@angular/core'
import { combineLatest, Observable } from 'rxjs'
import { NormalTime } from '../normal-time.service'
import { VTime, VTimeService } from '../v-time.service'
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

  updateVTime(): void {
    const normalTime: NormalTime = {
      hours: this.normalHoursInput.value,
      minutes: this.normalMinutesInput.value,
      seconds: this.normalSecondsInput.value,
      milliseconds: 0,
    }
    const vTime: VTime = VTimeService.convertNormalTimeToVTime(normalTime)
    this.vHoursInput.setValue(vTime.v)
    this.vMinutesInput.setValue(vTime.deciV)
    this.vSecondsInput.setValue(vTime.milliV)
  }

  updateNormalTime(): void {
    const vTime: VTime = {
      v: this.vHoursInput.value,
      deciV: this.vMinutesInput.value,
      milliV: this.vSecondsInput.value,
    }
    const normalTime = VTimeService.convertVTimeToNormalTime(vTime)
    this.normalHoursInput.setValue(normalTime.hours)
    this.normalMinutesInput.setValue(normalTime.minutes)
    this.normalSecondsInput.setValue(normalTime.seconds)
  }
}
