import { TestBed } from '@angular/core/testing'

import { VTimeService } from './v-time.service'

describe('VTimeService', () => {
  let service: VTimeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VTimeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
