import { Component, Input, OnInit } from '@angular/core';
import { YCombinatorNewsService } from 'src/app/services/y-combinator-news.service';
import { Story } from 'src/types/Story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
})
export class StoryComponent implements OnInit {
  @Input() storyId: number = -1;

  story: Story = {
    by: '',
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: '',
  };

  constructor(
    private readonly yCombinatorNewsService: YCombinatorNewsService
  ) {}

  ngOnInit(): void {
    this.yCombinatorNewsService
      .getStoryById(this.storyId)
      .subscribe((story) => (this.story = story));
  }
}
