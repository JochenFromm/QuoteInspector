import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  quotes: string[] = [];

  constructor (private activatedRoute: ActivatedRoute,
               private quotesService: QuotesService) {
  }

  getKeyword() : void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.keyword = params['q'] || '';
    });
  }

  getQuotes() : void {
    this.quotesService.findAll().subscribe(data => {
      this.quotes = data;
    });
  }

  ngOnInit() {
    this.getKeyword();
    this.getQuotes();
  }
}
