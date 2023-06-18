import { Component, OnInit } from '@angular/core';
import { YCombinatorNewsService } from 'src/app/services/y-combinator-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  public topStoryIds: number[] = [];
  public loading: boolean = true;

  constructor(
    private readonly _yCombinatorNewsService: YCombinatorNewsService
  ) {}

  ngOnInit(): void {
    this._yCombinatorNewsService.getTopStoryIds(30).subscribe((topStoryIds) => {
      this.topStoryIds = topStoryIds;
      this.loading = false;
    });
  }
}
