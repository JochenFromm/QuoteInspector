import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {
  items: Observable<string[]>
  result: string[] = [];

  constructor(private http: HttpClient) {
   this.items = this.http.get('assets/quotes.txt', { responseType: 'text' })
                         .map((res) => String(res).split(/\r\n|\n/));
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
