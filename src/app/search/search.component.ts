import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CloudComponent } from '../tag/cloud.component';
import { QuotesComponent } from './quotes.component';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    QuotesService,
  ]
})

export class SearchComponent implements OnInit {
  keyword: string = '';
  data: string[] = [];
  quotes: string[] = [];
  text: string = '';

  constructor (private activatedRoute: ActivatedRoute,
               private quotesService: QuotesService) {
  }

  onInputChanged(value: string) {
    this.keyword = value;
    this.updateQuotes();
  }

  updateQuotes() {
    this.quotes = this.filter(this.data, this.keyword);
    this.text = this.quotes.join(' ');
  }

  getKeyword() : void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.keyword = params['q'] || '';
    });
  }

  getQuotes() : void {
    this.quotesService.findAll().subscribe(data => {
      this.data = data;
      this.updateQuotes();
    });
  }

  ngOnInit() {
    this.getKeyword();
    this.getQuotes();
  }

  filter(data, keyword) : string[] {
    let result = [];
    if (data.length > 0) {
      const word = keyword.toLowerCase();
      result = data.filter((line) => line.toLowerCase().includes(word));
    }
    return result;
  }
}
