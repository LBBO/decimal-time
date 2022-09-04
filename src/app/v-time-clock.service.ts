import { Injectable } from '@angular/core'
import { ITimeService } from './ITimeService'
import { VTimeService } from './v-time.service'
import { ControllableVTimeClockService } from './controllable-v-time-clock-service'

@Injectable({
  providedIn: 'root',
})
export class VTimeClockService
  extends ControllableVTimeClockService
  implements ITimeService {
  constructor(private vTimeService: VTimeService) {
    super(vTimeService.time$)
  }
}
