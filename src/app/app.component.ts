import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Quote Inspector';
  keyword: string = '';
  quotes: string[] = [];

  constructor (private http: Http) {
  }

  ngOnInit() {
    this.http.get('/assets/quotes.txt').subscribe(data => {
      this.quotes = data.text().split(/\r\n|\n/);
    })
  }
}
