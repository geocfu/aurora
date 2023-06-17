import { Component, OnInit } from '@angular/core';
import { YCombinatorNewsService } from 'src/app/services/y-combinator-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  public topStoryIds: number[] = [];

  constructor(
    private readonly yCombinatorNewsService: YCombinatorNewsService
  ) {}

  ngOnInit(): void {
    this.yCombinatorNewsService.getTopStoryIds(30).subscribe((topStoryIds) => {
      this.topStoryIds = topStoryIds;
    });
  }
}
