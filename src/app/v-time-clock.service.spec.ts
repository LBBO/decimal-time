import { TestBed } from '@angular/core/testing'

import { VTimeClockService } from './v-time-clock.service'
import { VTimeService } from './v-time.service'

describe('VTimeService', () => {
  let service: VTimeClockService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VTimeClockService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('normal time -> v time', () => {
    it('should convert midnight', () => {
      expect(
        VTimeService.convertNormalTimeToVTime({
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        }),
      ).toEqual({
        v: 0,
        deciV: 0,
        milliV: 0,
      })
    })

    it('should convert noon', () => {
      expect(
        VTimeService.convertNormalTimeToVTime({
          hours: 12,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        }),
      ).toEqual({
        v: 5,
        deciV: 0,
        milliV: 0,
      })
    })

    it('should convert a quarter day', () => {
      expect(
        VTimeService.convertNormalTimeToVTime({
          hours: 6,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        }),
      ).toEqual({
        v: 2,
        deciV: 50,
        milliV: 0,
      })
    })

    it('should convert a minute before noon', () => {
      expect(
        VTimeService.convertNormalTimeToVTime({
          hours: 11,
          minutes: 59,
          seconds: 0,
          milliseconds: 0,
        }),
      ).toEqual({
        v: 4,
        deciV: 99,
        milliV: 30,
      })
    })
  })

  describe('should convert time to vtime and back again', () => {
    ;[
      {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      },
      {
        hours: 12,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      },
      // {
      //   hours: 11,
      //   minutes: 59,
      //   seconds: 0,
      //   milliseconds: 0,
      // },
      // {
      //   hours: 17,
      //   minutes: 36,
      //   seconds: 12,
      //   milliseconds: 345,
      // },
    ].forEach((input) => {
      it(`for ${input.hours}:${input.minutes} ${input.seconds}.${input.milliseconds}`, () => {
        const vtime = VTimeService.convertNormalTimeToVTime(input)
        expect(VTimeService.convertVTimeToNormalTime(vtime)).toEqual(input)
      })
    })
  })
})
