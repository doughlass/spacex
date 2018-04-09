import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SafePipe } from './safe.pipe';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { SuccessRateComponent } from './stats/success-rate/success-rate.component';

import { CountUpModule } from 'countup.js-angular2';
import { CostPerLaunchComponent } from './stats/cost-per-launch/cost-per-launch.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { HomeComponent } from './page/home/home.component';
import { RocketComponent } from './page/rocket/rocket.component';
import { SpinupComponent } from './stats/spinup/spinup.component';

const matModules = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules],
  declarations: [],
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    CostPerLaunchComponent,
    DataBlockComponent,
    HomeComponent,
    LaunchCardComponent,
    RocketComponent,
    SafePipe,
    SpinupComponent,
    SuccessRateComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    CountUpModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      },
    ),
  ],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
