import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AnHttpGuard} from './an-http.guard';
import {HomePageModule} from './home/home.module';
import {TimeService} from './time.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [      HttpClientModule,
      HttpClientJsonpModule,
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HomePageModule],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AnHttpGuard, multi: true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
