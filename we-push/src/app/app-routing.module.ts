import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsComponent } from './comp/controls/controls.component';
import { EventDisplayComponent } from './comp/event-display/event-display.component';

const routes: Routes = [
  { path: 'display', component: EventDisplayComponent },
  { path: 'controls', component: ControlsComponent },
  { path: '**', redirectTo: '/controls', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
