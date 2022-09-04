import { Injectable } from '@angular/core'
import { NormalTimeService } from './normal-time.service'
import { ControllableNormalTimeClockService } from './controllable-normal-time-clock-service'

@Injectable({
  providedIn: 'root',
})
export class NormalTimeClockService extends ControllableNormalTimeClockService {
  constructor(private normalTimeService: NormalTimeService) {
    super(normalTimeService.time$)
  }
}
