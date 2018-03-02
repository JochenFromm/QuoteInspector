import { Component, OnInit } from '@angular/core';
import { QuotesComponent } from '../quotes/quotes.component';
import { Http } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
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
