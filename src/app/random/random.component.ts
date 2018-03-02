import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {
  title: string = 'Quote Inspector';
  quote_author: string = '';
  quote_text: string = '';
  quotes: string[] = [];


  constructor (private http: Http) {
  }

  ngOnInit() {
    this.http.get('/assets/quotes.txt').subscribe(data => {
      this.quotes = data.text().split(/\r\n|\n/);

      const index = Math.floor((Math.random() * this.quotes.length));
      this.quote_text = this.quote(this.quotes[index]);
      this.quote_author = this.author(this.quotes[index]);
    })
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
