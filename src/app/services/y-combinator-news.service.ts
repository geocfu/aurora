import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Story } from '../../types/Story';

@Injectable({
  providedIn: 'root',
})
export class YCombinatorNewsService {
  constructor(private readonly _httpClient: HttpClient) {}

  getTopStoryIds(limit?: number): Observable<number[]> {
    return this._httpClient
      .get<number[]>(
        `${environment.y_combinator_news_base_url}/topstories.json`
      )
      .pipe(
        map((topStoryIds) => {
          if (limit) {
            return topStoryIds.slice(0, limit);
          }
          return topStoryIds;
        })
      );
  }

  getStoryById(itemId: number): Observable<Story> {
    return this._httpClient.get<Story>(
      `${environment.y_combinator_news_base_url}/item/${itemId}.json`
    );
  }
}
