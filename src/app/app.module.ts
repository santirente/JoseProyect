import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FeaturesModule,
  ],
  exports: [MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
