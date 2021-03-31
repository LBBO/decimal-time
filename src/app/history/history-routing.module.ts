import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HistoryComponent } from './history.component'

const routes: Routes = [
  {
    path: 'history',
    children: [{ path: '', pathMatch: 'full', component: HistoryComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}