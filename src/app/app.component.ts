import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Quote Inspector';

  constructor (private http: Http) {
  }
}
