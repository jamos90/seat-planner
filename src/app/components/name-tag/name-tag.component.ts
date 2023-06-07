import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-tag',
  templateUrl: './name-tag.component.html',
  styleUrls: ['./name-tag.component.scss']
})
export class NameTagComponent {
  @Input() tagData: any;

  drop($event: any) {
    console.log($event);
  }
}
