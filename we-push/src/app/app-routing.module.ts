import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDisplayComponent } from './comp/event-display/event-display.component';

const routes: Routes = [
  { path: 'display', component: EventDisplayComponent },
  { path: '**', redirectTo: '/display', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
