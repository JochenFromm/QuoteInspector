import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnChanges {
  @Input() keyword: string;
  @Input() quotes: string[];
  lines: string[] = [];

  constructor() { }

  ngOnChanges() {
    if (this.quotes.length > 0) {
      this.lines = this.quotes.filter((quote) => quote.includes(this.keyword));
    }
  }

  author(line) {
    const author = line.split('~')[1];
    return author ? author.trim() : ''
  }

  quote(line) {
    const quote = line.split('~')[0];
    return quote ? quote.trim() : ''
  }
}
