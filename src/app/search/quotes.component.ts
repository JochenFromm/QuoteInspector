import { Component, OnChanges, Input } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnChanges {
  @Input() keyword: string;
  @Input() quotes: string[];
  lines: string[] = [];

  constructor (private quotesService: QuotesService) {
  }


  ngOnChanges() {
    if (this.quotes.length > 0) {
      const word = this.keyword.toLowerCase();
      this.lines = this.quotes.filter((quote) => quote.toLowerCase().includes(word));
    }
  }

  author(line) {
    return this.quotesService.author(line);
  }

  quote(line) {
    return this.quotesService.quote(line);
  }
}
