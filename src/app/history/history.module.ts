import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HistoryRoutingModule } from './history-routing.module'
import { HistoryComponent } from './history.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HistoryRoutingModule, MatCardModule, MatButtonModule],
})
export class HistoryModule {}
