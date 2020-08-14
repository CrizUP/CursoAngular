import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { AutoCardComponent } from './components/auto-card.component';
import { AutoComponent } from './components/auto/auto.component';
import { AutosComponent } from './components/autos/autos.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AutoCardComponent,
    AutoComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
