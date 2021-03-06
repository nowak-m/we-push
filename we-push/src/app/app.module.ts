import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDisplayComponent } from './comp/event-display/event-display.component';
import { ControlsComponent } from './comp/controls/controls.component';
import { ActionComponent } from './comp/action/action.component';
import { HeaderComponent } from './comp/header/header.component';
import { FooterComponent } from './comp/footer/footer.component';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';
import { EventViewComponent } from './comp/event-view/event-view.component';
import { AttributionsComponent } from './comp/attributions/attributions.component';
import { AttributionViewComponent } from './comp/attribution-view/attribution-view.component';

import { MotivationLocalService } from './serv/motivation-local.service';
import { GithubPushEventsHttpService } from './serv/github-push-events-http.service';
import { LinkService } from './serv/link.service';

@NgModule({
  declarations: [
    AppComponent,
    EventDisplayComponent,
    ControlsComponent,
    ActionComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeDialogComponent,
    EventViewComponent,
    AttributionsComponent,
    AttributionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    LayoutModule
  ],
  providers: [
    {
      provide: 'PushEventsService',
      useClass: GithubPushEventsHttpService
    },
    {
      provide: 'MotivationService',
      useClass: MotivationLocalService
    },
    {
      provide: 'LinkHandler',
      useClass: LinkService
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeDialogComponent, AttributionsComponent]
})
export class AppModule {}
