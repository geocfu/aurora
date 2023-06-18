import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'humanFriendlyTime',
})
export class HumanFriendlyTimePipe implements PipeTransform {
  transform(date: number): string {
    return moment(date).fromNow();
  }
}
