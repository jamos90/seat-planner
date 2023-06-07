import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  DEFAULT_TABLE_DIMENSIONS: any = {
    circular: {
      height: 100,
      width: 100,
      borderRadius: 50
    },
    square: {
      height: 100,
      width: 100,
      borderRadius: 0
    },
    rectangle: {
      height: 300,
      width: 100,
      borderRadius: 0
    }
  };

  constructor() {}

  public generateTables(tableType: string, tableNumber: number): any[] {
    const tableArray = [];
    for (let i = 0; i < tableNumber; i++) {
      tableArray.push({
        tableType: tableType,
        startingHeight: this.DEFAULT_TABLE_DIMENSIONS[tableType].height,
        startingWidth: this.DEFAULT_TABLE_DIMENSIONS[tableType].width,
        borderRadius: this.DEFAULT_TABLE_DIMENSIONS[tableType].borderRadius
      });
    }
    return tableArray;
  }
}
