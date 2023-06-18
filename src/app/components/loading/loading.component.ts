import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  @Input() single: boolean = false;
  @Input() multiple: boolean = false;
}
