import { Injectable } from '@angular/core'
import { NormalTime, NormalTimeService } from './normal-time.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export type VTime = {
  v: number
  deciV: number
  milliV: number
}

@Injectable({
  providedIn: 'root',
})
export class VTimeService {
  public readonly time$: Observable<VTime> = this.normalTimeService.time$.pipe(
    map(VTimeService.convertNormalTimeToVTime),
  )

  constructor(private readonly normalTimeService: NormalTimeService) {}

  static getCurrentTime(): VTime {
    return this.convertNormalTimeToVTime(NormalTimeService.getCurrentTime())
  }

  static convertNormalTimeToVTime(normalTime: NormalTime): VTime {
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

  static convertVTimeToNormalTime(vTime: VTime): NormalTime {
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
}
