import { TestBed } from '@angular/core/testing'

import { NormalTimeClockService } from './normal-time-clock.service'

describe('NormalTimeService', () => {
  let service: NormalTimeClockService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(NormalTimeClockService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
