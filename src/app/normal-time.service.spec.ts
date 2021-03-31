import { TestBed } from '@angular/core/testing'

import { NormalTimeService } from './normal-time.service'

describe('NormalTimeService', () => {
  let service: NormalTimeService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(NormalTimeService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
