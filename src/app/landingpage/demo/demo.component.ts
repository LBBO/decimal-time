import { Component, OnInit } from '@angular/core'
import { NormalTimeService } from '../../normal-time.service'
import { VTimeService } from '../../v-time.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(
    public normalTimeService: NormalTimeService,
    public vTimeService: VTimeService,
  ) {}

  ngOnInit(): void {}
}
