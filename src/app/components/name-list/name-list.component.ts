import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent {
  @Input() componentData: any[];
  @Input() filterProperty: any;
  @Output() nameSelected = new EventEmitter<any>();

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || ''))
    );

    console.log(this.filterProperty);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('filter', value);
    return this.componentData.filter(option => {
      // console.log(option);
      if (this.filterProperty) {
        return option[this.filterProperty].toLowerCase().includes(filterValue);
      }
    });
  }

  handleNameTagCreation(event: any) {
    console.log(event);
    this.nameSelected.emit({ name: event.option.value });
  }

  drop($event: KeyboardEvent) {
    console.log($event.target);
  }
}
