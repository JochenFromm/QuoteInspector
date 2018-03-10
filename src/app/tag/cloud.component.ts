
import { Component, Input, OnInit } from '@angular/core';
import { stopWords } from './constants';

@Component({
  selector: 'tag-cloud',
  templateUrl: 'cloud.component.html',
  styleUrls: ['cloud.component.css']
})

export class CloudComponent implements OnInit  {
  @Input() text: string;
  @Input() keyword: string;
  grades = ["extra_small ", "small", "normal", "medium", "large", "extra_large"];
  cloud = {};
  tags = [];
  max = 0;
  min = 3;

  ngOnInit() {
 }

  ngOnChanges() {
    const cloud = this.buildCloud(this.text);
    this.cloud = this.filterCloud(cloud);
    this.tags = [...Object.keys(cloud)];
    this.max = Math.max(...Object.values(cloud));
  }

  buildCloud(value) {
    const excludeWords = stopWords;
    excludeWords.push(this.keyword.toLowerCase())
    const words = value.split(' ');
    return words.map((word)=> word.toLowerCase().replace(/[\(\)\:\.\,!?;]|'s/g, ''))
      .filter((s) => s.trim() && s.length > this.min)
      .filter((s) => !excludeWords.includes(s))
      .reduce((x, s) => {
        x[s] = (x[s] || 0)+1;
        return x
      }, {});
  }

  filterCloud(cloud) {
    return Object.keys(cloud)
      .filter(key => cloud[key] > 2)
      .reduce((obj, key) => {
        obj[key] = cloud[key];
        return obj;
      }, {});
  }

  strength(index) {
    const maxGrade = (this.grades.length-1);
    const strength = (index / this.max) * maxGrade;
    return this.grades[Math.floor(strength)];
  }

  tagClass(tag) {
    return this.strength(this.cloud[tag]);
  }
}
