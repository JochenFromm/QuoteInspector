import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './search/quotes.component';
import { SearchComponent } from './search/search.component';
import { RandomComponent } from './random/random.component';
import { AboutComponent } from './about/about.component';
import { QuotesService } from './services/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    SearchComponent,
    RandomComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    QuotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
