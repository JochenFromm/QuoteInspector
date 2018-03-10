import { Component, Input } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  @Input() keyword: string;
  @Input() quotes: string[];

  constructor (private quotesService: QuotesService) {
  }

  author(line) {
    return this.quotesService.author(line);
  }

  quote(line) {
    return this.quotesService.quote(line);
  }
}
