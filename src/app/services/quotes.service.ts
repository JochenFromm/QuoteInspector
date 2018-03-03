import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {
  items: Observable<string[]>
  result: string[] = [];

  constructor(private http: Http) {
   this.items = this.http.get('/assets/quotes.txt')
                         .map((res: Response) => res.text().split(/\r\n|\n/));
   this.items.subscribe(data => this.result = data);
  }

  findAll(): Observable<string[]> {
    return this.items;
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
