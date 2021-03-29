import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDisplayComponent } from './comp/event-display/event-display.component';
import { ControlsComponent } from './comp/controls/controls.component';
import { ActionComponent } from './comp/action/action.component';
import { HeaderComponent } from './comp/header/header.component';
import { FooterComponent } from './comp/footer/footer.component';
import { WelcomeDialogComponent } from './comp/welcome-dialog/welcome-dialog.component';
import { EventViewComponent } from './comp/event-view/event-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDisplayComponent,
    ControlsComponent,
    ActionComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeDialogComponent,
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WelcomeDialogComponent]
})
export class AppModule {}
