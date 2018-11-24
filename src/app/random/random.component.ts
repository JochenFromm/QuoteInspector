import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {
  quote_author: string = '';
  quote_text: string = '';
  quotes: string[] = [];

  constructor (private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quotesService.findAll().subscribe(data => {
      this.quotes = data;
      this.selectRandomQuote();
    })
  }

  selectRandomQuote() {
    const index = Math.floor((Math.random() * this.quotes.length));
    const quote = this.quotes[index];
    this.quote_text = this.quotesService.quote(quote);
    this.quote_author = this.quotesService.author(quote);
  }

  refresh(): void {
    this.selectRandomQuote();
  }
}
