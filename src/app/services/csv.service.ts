import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  constructor() {}

  public importDataFromCSV(csvText: string): Array<any> {
    // console.log('csv test', csvText);
    const propertyNames = csvText.slice(0, csvText.indexOf('\n')).split(',');
    // console.log(propertyNames);
    const dataRows = csvText.slice(csvText.indexOf('\n') + 1).split('\n');
    // console.log(dataRows);
    let dataArray: any[] = [];
    dataRows.forEach(row => {
      let values = row.split(',');
      let obj: any = new Object();
      for (let index = 0; index < propertyNames.length; index++) {
        const propertyName: string = propertyNames[index];
        let val: any = values[index];
        if (val === '') {
          val = null;
        }
        obj[propertyName.replace(/[\n\r]/g, '').toLowerCase()] = val.replace(
          /[\n\r]/g,
          ''
        );
      }
      dataArray.push(obj);
    });
    return dataArray;
  }
}
